import type { Format } from "~/utils/constants";
import { UserGroup, type UserGroupFromAPI } from "./UserGroup";

export interface GroupFromAPI extends UserGroupFromAPI {
  enrolmentkey: string
  visibility: number
  participation: boolean
}

export class Group extends UserGroup {
  public constructor (
    id: number,
    name: string,
    description: string,
    descriptionFormat: Format,
    numberID: string,
    courseID: number,
    public readonly enrolmentKey: string,
    public readonly visibility: number,
    public readonly participation: boolean
  ) {
    super(
      id,
      name,
      description,
      descriptionFormat,
      numberID,
      courseID
    );
  }

  public static fromAPI (data: GroupFromAPI): Group {
    return new Group(
      data.id,
      data.name,
      data.description,
      data.descriptionformat,
      data.idnumber,
      data.courseid,
      data.enrolmentkey,
      data.visibility,
      data.participation
    );
  }
}
