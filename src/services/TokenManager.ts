import type { Client } from "~/services/Client";
import type { Token } from "~/models/Token";
import type { RSSToken } from "~/models/RSSToken";

import { listTokens } from "~/scrappers/listTokens";
import { resetRSSToken } from "~/scrappers/resetRSSToken";
import { resetWebServiceToken } from "~/scrappers/resetWebServiceToken";

export class TokenManager {
  readonly #client: Client;

  public constructor (client: Client) {
    this.#client = client;
  }

  /**
   * Scraps manually the HTML of `/user/managetoken.php`
   * page to list all the tokens.
   */
  public async listTokens (): Promise<Array<Token>> {
    return listTokens(this.#client.session.root, this.#client.cookies);
  }

  /**
   * Will reset any given token, whether it's a web service
   * or an RSS token.
   */
  public async resetToken (token: Token): Promise<string> {
    if (token.isRSSToken()) {
      await resetRSSToken(this.#client.session.root, this.#client.session.sessionKey, this.#client.cookies);
      const tokens = await this.listTokens();
      const rssToken = tokens.find((t) => t.isRSSToken()) as RSSToken;
      return rssToken.token;
    }
    else if (token.isWebServiceToken()) {
      return resetWebServiceToken(token.id, this.#client.session.root, this.#client.session.sessionKey, this.#client.cookies);
    }

    throw new Error("Unknown token type");
  }
}
