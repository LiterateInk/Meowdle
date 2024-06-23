export interface EnrolledCourseFromAPI {
  id: number
  fullname: string
  shortname: string
}

export class EnrolledCourse {
  public constructor (
    public readonly id: number,
    public readonly fullName: string,
    public readonly shortName: string
  ) {}

  public static fromAPI (data: EnrolledCourseFromAPI): EnrolledCourse {
    return new EnrolledCourse(
      data.id,
      data.fullname,
      data.shortname
    );
  }
}
