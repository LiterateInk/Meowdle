import { Client } from "~/services/Client";
import { TokenManager } from "~/services/TokenManager";

export class Preferences {
  public readonly tokenManager: TokenManager;

  public constructor (client: Client) {
    this.tokenManager = new TokenManager(client);
  }
}
