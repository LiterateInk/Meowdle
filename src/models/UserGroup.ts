import type { Format } from "~/utils/constants";

export interface UserGroupFromAPI {
  id: number
  name: string
  description: string
  descriptionformat: Format
  idnumber: string
  courseid: number
}

export class UserGroup {
  public constructor (
    public readonly id: number,
    public readonly name: string,
    public readonly description: string,
    public readonly descriptionFormat: Format,
    public readonly numberID: string,
    public readonly courseID: number
  ) {}

  public static fromAPI (data: UserGroupFromAPI): UserGroup {
    return new UserGroup(
      data.id,
      data.name,
      data.description,
      data.descriptionformat,
      data.idnumber,
      data.courseid
    );
  }
}
