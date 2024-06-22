import { Client } from "~/services/Client";
import { Session } from "~/models/Session";
import { findValueBetween } from "~/utils/finders";

export class Authenticator {
  public async fromCAS (ticketURL: string): Promise<Client> {
    let response: Response;
    let cookies: string[];

    // Should be in the following format : /login/index.php?authCAS=CAS&ticket=ST-xxx
    let url = ticketURL;

    // Initiate the CAS authentication process.
    response = await fetch(url, { redirect: "manual" });

    if (response.status !== 302)
      throw new Error(`Expected a 302 status code, got ${response.status}`);

    { // Grab the first MoodleSession cookie for the next request.
      const cookie = response.headers.get("set-cookie")?.split(";")[0];
      if (!cookie) throw new Error("No cookie found");
      cookies = [cookie];
    }

    // Redirected to : /login/index.php?authCAS=CAS
    url = response.headers.get("location")!;

    response = await fetch(url, {
      headers: { "Cookie": cookies.join("; ") },
      redirect: "manual"
    });

    return this.#postAuthentication(response);
  }

  public async fromCredentials (root: string, username: string, password: string): Promise<Client> {
    let response: Response;
    let cookies: string[];
    const url = root + "/login/index.php";

    response = await fetch(url + "?loginredirect=1");

    {
      const cookie = response.headers.get("set-cookie")?.split(";")[0];
      if (!cookie) throw new Error("'MoodleSession' cookie not found");
      cookies = [cookie!];
    }

    const html = await response.text();
    const loginToken = findValueBetween(html, "logintoken\" value=\"", "\"");

    response = await fetch(url, {
      method: "POST",
      redirect: "manual",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": cookies.join("; ")
      },
      body: "anchor="
        + "&logintoken=" + loginToken
        + "&username=" + encodeURIComponent(username)
        + "&password=" + encodeURIComponent(password)
    });

    return this.#postAuthentication(response);
  }

  async #postAuthentication (response: Response): Promise<Client> {
    let url: string;

    if (response.status !== 303)
      throw new Error(`Expected a 303 status code, got ${response.status}`);

    // Read and store new cookies.
    const cookies = response.headers.getSetCookie()
      .map((c) => c.split(";")[0])
      .filter((c) => !c.endsWith("=deleted"));

    // Redirected to : /login/index.php?testsession=xxx
    url = response.headers.get("location")!;

    // Doing this request will probably activates the session (?)
    response = await fetch(url, {
      headers: { "Cookie": cookies.join("; ") },
      redirect: "manual"
    });

    if (response.status !== 303)
      throw new Error(`Expected a 303 status code, got ${response.status}`);

    // Redirected to homepage : /my/
    url = response.headers.get("location")!;

    {
      const index = url.indexOf("/my/");
      if (index === -1) throw new Error("Expected a /my/ path");
      url = url.slice(0, index);
    }

    return this.fromSessionCookies(url, cookies);
  }

  public async fromSessionCookies (root: string, cookies: string[]): Promise<Client> {
    const url = root + "/my/";

    // We'll get this page since session information can be found here.
    const response = await fetch(url, {
      headers: { "Cookie": cookies.join("; ") },
      redirect: "manual"
    });

    if (response.status !== 200)
      throw new Error("Bad authentication, your session may have expired.");

    // Create a client from there and return it.
    const html = await response.text();
    return new Client(Session.fromHTML(html), cookies);
  }
}
