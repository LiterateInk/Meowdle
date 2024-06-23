import { credentials } from "./_credentials";
import { obtainWebServiceTokenFromCredentials, WebService } from "../src";

void async function main () {
  if (!credentials.username || !credentials.password)
    throw new Error("Missing the USERNAME or/and PASSWORD in .env file.");

  const token = await obtainWebServiceTokenFromCredentials(
    credentials.root,
    credentials.username,
    credentials.password
  );

  const ws = new WebService(credentials.root, token);
  // Do authenticated requests with `ws` !

  // If you need examples of requests, you can look at the
  // `webservice` folder. It contains all the requests
  // available in the Moodle API and implemented in Meowdle.
}();
