import { Authenticator } from "../src";

const ROOT = "http://moodle.localhost";
const COOKIES = [
  "MoodleSession=abcdefghijklmnaopqrstuvwxyz1234567890",
  "MOODLEID1_=SOMERANDOM_STRING%20"
];

void async function main () {
  const authenticator = new Authenticator();
  const client = await authenticator.fromSessionCookies(ROOT, COOKIES);

  // Do whatever you want with `client` !
}();
