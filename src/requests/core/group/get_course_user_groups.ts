import { UserGroup, type UserGroupFromAPI } from "~/models/UserGroup";

interface Parameters {
  /**
   * ID of course.
   * @default 0 // = all the courses where the user is enrolled.
   */
  courseid?: number

  /**
   * ID of user.
   * @default 0 // = current user.
   */
  userid?: number

  /**
   * Will return only groups in the specified grouping.
   * @default 0 // = all groups.
   */
  groupingid?: number
}

interface Response {
  groups: UserGroupFromAPI[]
  warnings: unknown[]
}

/**
 * Get all groups in the specified course for the specified user.
 *
 * @location `/group/externallib.php`
 * @method `get_course_user_groups`
 * @since Moodle 2.9
 */
export default {
  schema: {} as Parameters,
  name: "core_group_get_course_user_groups",
  handle (response: Response): Array<UserGroup> {
    return response.groups.map(UserGroup.fromAPI);
  }
} as const;

