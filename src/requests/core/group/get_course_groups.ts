import { UserGroup, type UserGroupFromAPI } from "~/models/UserGroup";

interface Parameters {
  /**
   * ID of course.
   */
  courseid: number
}

interface Response {
  groups: UserGroupFromAPI[]
  warnings: unknown[]
}

/**
 * Get all groups in the specified course.
 *
 * @capabilities ["moodle/course:managegroups"]
 * @location `/group/externallib.php`
 * @method `get_course_groups`
 * @since Moodle 2.2
 */
export default {
  ajax: true,
  authenticated: true,

  schema: {} as Parameters,
  name: "core_group_get_course_groups",
  handle (response: Response): Array<UserGroup> {
    console.log(response);
    return response.groups.map(UserGroup.fromAPI);
  }
} as const;

