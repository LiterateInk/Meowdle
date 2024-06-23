import { credentials } from "../_credentials";
import { WebService, requests } from "../../src";

void async function main () {
  if (!credentials.ws_token)
    throw new Error("Missing the WS_TOKEN in .env file.");

  const ws = new WebService(credentials.root, credentials.ws_token);

  const enrolledUsers = await ws.from(requests.core.enrol.get_enrolled_users).request({
    courseid: 2
  });

  console.log(enrolledUsers);
}();
