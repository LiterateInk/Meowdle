import type { Session } from "~/models/Session";

import { Preferences } from "~/services/Preferences";
import { AJAX } from "~/services/AJAX";

export class Client {
  constructor (
    public session: Session,
    public cookies: string[]
  ) {}

  public readonly preferences = new Preferences(this);
  public readonly ajax = new AJAX(this);
}
