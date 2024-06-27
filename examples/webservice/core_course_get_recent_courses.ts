import { credentials } from "../_credentials";
import { WebService, requests } from "../../src";

void async function main () {
  if (!credentials.ws_token)
    throw new Error("Missing the WS_TOKEN in .env file.");

  const ws = new WebService(credentials.root, credentials.ws_token);

  const recentCourses = await ws.from(requests.core.course.get_recent_courses).request({
    limit: 10
    // you can add more parameters here
  });

  console.log(recentCourses);
}();
