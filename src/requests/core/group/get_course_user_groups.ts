import { UserGroup, type UserGroupFromAPI } from "~/models/UserGroup";

interface Parameters {
  courseid: number
  userid: number
  /** @default 0 */
  groupingid?: number
}

interface Response {
  groups: UserGroupFromAPI[]
  warnings: unknown[]
}

/**
 * Get all groups in the specified course for the specified user.
 * @since Moodle 2.9
 */
const core_group_get_course_user_groups = {
  schema: {} as Parameters,
  name: "core_group_get_course_user_groups",
  handle (response: Response): Array<UserGroup> {
    return response.groups.map(UserGroup.fromAPI);
  }
} as const;

export default core_group_get_course_user_groups;
