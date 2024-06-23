import { clientFromCredentials } from "../../src";
import { credentials } from "../_credentials";

/**
 * In this example, you'll learn how to reset
 * a web service token using Meowdle.
 */
void async function main () {
  const client = await clientFromCredentials(
    credentials.root,
    credentials.username!,
    credentials.password!
  );

  // Get every tokens available.
  const tokens = await client.preferences.tokenManager.listTokens();
  if (tokens.length === 0) {
    console.warn("No token found for this user.");
    return;
  }

  for (const token of tokens) {
    if (token.isWebServiceToken()) {
      console.info(`+ WebServiceToken: ${token.name} (${token.id}) for service "${token.service}"`);
    }
    else if (token.isRSSToken()) {
      // We have directly the token value for RSS tokens.
      console.info(`+ RSSToken: "${token.token}"`);
    }
  }
}();
