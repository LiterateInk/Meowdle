import type { Client } from "~/services/Client";
import { authenticateFromSessionCookies } from "./fromSessionCookies";

export const postAuthentication = async (response: Response): Promise<Client> => {
  let url: string;

  if (response.status !== 303)
    throw new Error(`Expected a 303 status code, got ${response.status}`);

  // Read and store new cookies.
  const cookies = response.headers.getSetCookie()
    .map((c) => c.split(";")[0])
    .filter((c) => !c.endsWith("=deleted"));

  // Redirected to : /login/index.php?testsession=USER_ID
  url = response.headers.get("location")!;

  // Doing this request will probably activates the session (?)
  response = await fetch(url, {
    headers: { "Cookie": cookies.join("; ") },
    redirect: "manual"
  });

  if (response.status !== 303)
    throw new Error(`Expected a 303 status code, got ${response.status}`);

  // Redirected to an URL starting with "/my/".
  url = response.headers.get("location")!;

  {
    const index = url.indexOf("/my/");
    if (index === -1) throw new Error("Expected a '/my/*' path");
    url = url.slice(0, index);
  }

  return authenticateFromSessionCookies(url, cookies);
};
