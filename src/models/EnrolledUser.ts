import { type EnrolledCourseFromAPI, EnrolledCourse } from "./EnrolledCourse";
import { type RoleFromAPI, Role } from "./Role";

export interface EnrolledUserFromAPI {
  id: number
  username: string
  firstname: string
  lastname: string
  fullname: string
  email: string
  department: string
  firstaccess: number
  lastaccess: number
  lastcourseaccess: number
  profileimageurlsmall: string
  profileimageurl: string

  roles: Array<RoleFromAPI & {
    sortorder: number
  }>

  enrolledcourses: Array<EnrolledCourseFromAPI>
}

export class EnrolledUser {
  public constructor (
    public readonly id: number,
    public readonly username: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly fullName: string,
    public readonly email: string,
    public readonly department: string,
    public readonly firstAccess: Date,
    public readonly lastAccess: Date,
    public readonly lastCourseAccess: Date,
    public readonly profileImageUrlSmall: string,
    public readonly profileImageUrlLarge: string,
    public readonly roles: Array<Role>,
    public readonly enrolledCourses: Array<EnrolledCourse>
  ) {}

  public static fromAPI (data: EnrolledUserFromAPI): EnrolledUser {
    return new EnrolledUser(
      data.id,
      data.username,
      data.firstname,
      data.lastname,
      data.fullname,
      data.email,
      data.department,
      new Date(data.firstaccess * 1000),
      new Date(data.lastaccess * 1000),
      new Date(data.lastcourseaccess * 1000),
      data.profileimageurlsmall,
      data.profileimageurl,
      data.roles.map(Role.fromAPI),
      data.enrolledcourses.map(EnrolledCourse.fromAPI)
    );
  }
}
