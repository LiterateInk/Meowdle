import { clientFromCredentials } from "../src";
import { credentials } from "./_credentials";

void async function main () {
  if (!credentials.username || !credentials.password)
    throw new Error("Missing the USERNAME or/and PASSWORD in .env file.");

  const client = await clientFromCredentials(
    credentials.root,
    credentials.username,
    credentials.password
  );

  // Do whatever you want with `client` !
}();
