import { authenticateFromSessionCookies } from "../src";
import { credentials } from "./_credentials";

const COOKIES = [
  "MoodleSession=abcdefghijklmnaopqrstuvwxyz1234567890",
  "MOODLEID1_=SOMERANDOM_STRING%20"
];

void async function main () {
  const client = await authenticateFromSessionCookies(credentials.root, COOKIES);

  // Do whatever you want with `client` !
}();
