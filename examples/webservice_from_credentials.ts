import { credentials } from "./_credentials";
import { webServiceFromCredentials } from "../src";

void async function main () {
  if (!credentials.username || !credentials.password)
    throw new Error("Missing the USERNAME or/and PASSWORD in .env file.");

  // Special method that asks for a token using '/login/token.php'.
  const ws = await webServiceFromCredentials(
    credentials.root,
    credentials.username,
    credentials.password
  );

  // Do authenticated requests with `ws` !
  console.log(ws.token);

  // If you need examples of requests, you can look at the
  // `webservice` folder. It contains all the requests
  // available in the Moodle API and implemented in Meowdle.
}();
