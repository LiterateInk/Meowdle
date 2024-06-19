import { Client } from "~/services/Client";

export class AJAX {
  readonly #client: Client;

  public constructor (client: Client) {
    this.#client = client;
  }
}
