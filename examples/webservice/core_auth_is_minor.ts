import { credentials } from "../_credentials";
import { WebService, requests } from "../../src";

void async function main () {
  if (!credentials.ws_token)
    throw new Error("Missing the WS_TOKEN in .env file.");

  const ws = new WebService(credentials.root, credentials.ws_token);

  const returnValue = await ws.from(requests.core.auth.is_minor).request({
    age: 18,
    country: "FR"
  });

  console.log(returnValue);
}();
