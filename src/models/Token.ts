import type { WebServiceToken } from "~/models/WebServiceToken";
import type { RSSToken } from "~/models/RSSToken";

export abstract class Token {
  // Prevent the class from being instantiated directly.
  protected constructor () {}

  public isWebServiceToken (): this is WebServiceToken {
    // We never have the token when it's a web service token.
    return !("token" in this);
  }

  public isRSSToken (): this is RSSToken {
    // In the RSS token, it's already given.
    return "token" in this;
  }
}
