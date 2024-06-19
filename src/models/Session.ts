import { findValueBetween } from "~/utils/finders";

interface SessionFromHTML {
  wwwroot: string
  homeurl: unknown
  sesskey: string
  sessiontimeout: string
  sessiontimeoutwarning: number
  themerev: string
  slasharguments: number
  theme: string
  iconsystemmodule: string
  jsrev: string
  admin: string
  svgicons: boolean
  /** @example "Europe/Paris" */
  usertimezone: string
  language: string
  courseId: number
  contextid: number
  contextInstanceId: number
  langrev: number
  templaterev: string
}

export class Session {
  public constructor (
    public readonly root: string,
    public readonly sessionKey: string,
    public readonly sessionTimeout: number,
    public readonly userTimeZone: string,
    public readonly language: string,
    public readonly userID: number
  ) {}

  public static fromHTML (html: string): Session {
    const session = JSON.parse("{" + findValueBetween(html, "M.cfg = {", "};") + "}") as SessionFromHTML;

    return new Session(
      session.wwwroot,
      session.sesskey,
      parseInt(session.sessiontimeout),
      session.usertimezone,
      session.language,
      session.contextInstanceId
    );
  }
}
