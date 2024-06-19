import { Token } from "~/models/Token";

export class RSSToken extends Token {
  public constructor (public readonly token: string) {
    super();
  }
}
