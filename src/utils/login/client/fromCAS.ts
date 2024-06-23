import type { Client } from "~/services/Client";
import { clientFromAuthenticationResponse } from "./fromAuthenticationResponse";

export async function clientFromCAS (ticketURL: string): Promise<Client> {
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
    if (!cookie) throw new Error("'MoodleSession' cookie not found");
    cookies = [cookie];
  }

  // Redirected to : /login/index.php?authCAS=CAS
  url = response.headers.get("location")!;

  response = await fetch(url, {
    headers: { "Cookie": cookies.join("; ") },
    redirect: "manual"
  });

  return clientFromAuthenticationResponse(response);
}
