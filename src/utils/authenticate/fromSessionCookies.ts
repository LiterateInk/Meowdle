import { Session } from "~/models/Session";
import { Client } from "~/services/Client";

export async function authenticateFromSessionCookies (root: string, cookies: string[]): Promise<Client> {
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
