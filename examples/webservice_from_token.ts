import { credentials } from "./_credentials";
import { WebService } from "../src";

void async function main () {
  if (!credentials.ws_token)
    throw new Error("Missing the WS_TOKEN in .env file.");

  const ws = new WebService(credentials.root, credentials.ws_token);
  // Do authenticated requests with `ws` !

  // If you need examples of requests, you can look at the
  // `webservice` folder. It contains all the requests
  // available in the Moodle API and implemented in Meowdle.
}();
