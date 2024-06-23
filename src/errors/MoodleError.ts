export class MoodleError extends Error {
  public readonly type: string;

  constructor (message: string, type: string) {
    super(message);
    this.name = this.constructor.name;

    this.type = type;
  }
}
