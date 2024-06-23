import { authenticateFromSessionCookies, requests } from "../src";
import { credentials } from "./_credentials";

const COOKIES = [
  "MoodleSession=abcdefghijklmnaopqrstuvwxyz1234567890",
  "MOODLEID1_=SOMERANDOM_STRING%20"
];

/**
 * In this example, we'll see how we can
 * make a request to services using the AJAX endpoint.
 *
 * See the `webservice_endpoint` example to learn how to
 * do the exact same thing using WebService endpoints.
 */
void async function main () {
  const client = await authenticateFromSessionCookies(credentials.root, COOKIES);

  const recentCourses = await client.ajax.from(requests.core.course.get_recent_courses).request({
    userid: client.session.userID,
    limit: 10
  });

  console.log(recentCourses);
}();
