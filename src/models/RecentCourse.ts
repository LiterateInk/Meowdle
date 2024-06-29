import type { Format } from "~/utils/constants";

export interface RecentCourseFromAPI {
  id: number
  fullname: string
  shortname: string
  idnumber: string
  summary: string
  summaryformat: Format
  startdate: number
  enddate: number
  visible: boolean
  showactivitydates: boolean
  showcompletionconditions: null // TODO
  pdfexportfont: string
  fullnamedisplay: string
  viewurl: string
  /** base64url encoded image */
  courseimage: string
  progress: number
  hasprogress: boolean
  isfavourite: boolean
  hidden: boolean
  timeaccess: number
  showshortname: boolean
  coursecategory: string
}

export class RecentCourse {
  public constructor (
    public readonly id: number,
    public readonly fullName: string,
    public readonly fullNameDisplay: string,
    public readonly shortName: string,
    public readonly summary: string,
    public readonly summaryFormat: Format,
    public readonly startDate: Date,
    /** `null` when endless. */
    public readonly endDate: Date | null,
    /** Encoded as base64url. */
    public readonly image: string,
    public readonly url: string,
    public readonly visible: boolean,
    public readonly hidden: boolean,
    public readonly accessDate: Date,
    public readonly isFavorite: boolean,
    public readonly progress: number | null,
    public readonly hasProgress: boolean,
    public readonly category: string,
    public readonly showShortName: boolean
  ) {}

  public static fromAPI (data: RecentCourseFromAPI): RecentCourse {
    return new RecentCourse(
      data.id,
      data.fullname,
      data.fullnamedisplay,
      data.shortname,
      data.summary,
      data.summaryformat,
      new Date(data.startdate * 1000),
      data.enddate === 0 ? null : new Date(data.enddate * 1000),
      data.courseimage,
      data.viewurl,
      data.visible,
      data.hidden,
      new Date(data.timeaccess * 1000),
      data.isfavourite,
      data.hasprogress ? data.progress : null,
      data.hasprogress,
      data.coursecategory,
      data.showshortname
    );
  }
}
