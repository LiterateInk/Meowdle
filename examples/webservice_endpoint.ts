import { credentials } from "./_credentials";
import { WebService, requests } from "../src";

/**
 * In this example, you'll see how we can
 * use the WebService class to make
 * authenticated requests.
 *
 * See the `ajax_endpoint` example to learn how to
 * do the exact same thing using AJAX endpoints.
 */
void async function main () {
  if (!credentials.ws_token)
    throw new Error("Missing the WS_TOKEN in .env file.");

  const ws = new WebService(credentials.ws_token, credentials.root);

  const recentCourses = await ws.from(requests.core.course.get_recent_courses).request({
    userid: 14228,
    limit: 10
  });

  console.log(recentCourses);
}();
