import { Token } from "~/models/Token";

export class WebServiceToken extends Token {
  public constructor (
    public readonly id: string,
    public readonly name: string,
    public readonly service: string,
    public readonly validUntil: string | null,
    public readonly lastUsage: string | null,
    public readonly creatorName: string,
    public readonly creatorURL: string
  ) {
    super();
  }
}
