import { Authenticator } from "../src";
import { credentials } from "./_credentials";

void async function main () {
  if (!credentials.username || !credentials.password)
    throw new Error("Missing the USERNAME or/and PASSWORD in .env file.");

  const authenticator = new Authenticator();
  const client = await authenticator.fromCredentials(
    credentials.root,
    credentials.username,
    credentials.password
  );

  // Do whatever you want with `client` !
}();
