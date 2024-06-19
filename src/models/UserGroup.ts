export interface UserGroupFromAPI {
  id: number
  name: string
  description: string
  descriptionformat: number
  idnumber: string
  courseid: number
}

export class UserGroup {
  public constructor (
    public readonly id: number,
    public readonly name: string,
    public readonly description: string,
    public readonly descriptionFormat: number,
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
