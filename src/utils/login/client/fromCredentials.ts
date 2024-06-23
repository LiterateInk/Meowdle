import type { Client } from "~/services/Client";
import { findValueBetween } from "../../finders";
import { clientFromAuthenticationResponse } from "./fromAuthenticationResponse";

export async function clientFromCredentials (root: string, username: string, password: string): Promise<Client> {
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
  // Find the login token to authenticate,
  // read more about it here : <https://docs.moodle.org/dev/Login_token>.
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

  return clientFromAuthenticationResponse(response);
}
