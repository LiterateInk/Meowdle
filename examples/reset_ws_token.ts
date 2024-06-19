import { Authenticator, type WebServiceToken } from "../src";

const ROOT = "http://moodle.localhost";
const COOKIES = [
  "MoodleSession=abcdefghijklmnaopqrstuvwxyz1234567890",
  "MOODLEID1_=SOMERANDOM_STRING%20"
];

void async function main () {
  const authenticator = new Authenticator();
  const client = await authenticator.fromSessionCookies(ROOT, COOKIES);

  // Get every tokens available.
  const tokens = await client.preferences.tokenManager.listTokens();
  // Only get web service tokens.
  const webServiceTokens = tokens.filter((token) => token.isWebServiceToken()) as WebServiceToken[];
  if (webServiceTokens.length === 0) throw new Error("No web service token found");

  // Take the first one, for example.
  const token = webServiceTokens[0];

  // Reset it and get its new value.
  const value = await client.preferences.tokenManager.resetToken(token);
  console.log(`The token ${token.name} (${token.id}) for service "${token.service}" just got reset to the following value: "${value}"`);
}();
