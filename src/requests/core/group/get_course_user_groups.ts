import { UserGroup, type UserGroupFromAPI } from "~/models/UserGroup";
import type { RequestHandler } from "~/utils/requests";

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

type ResponseAPI = {
  groups: UserGroupFromAPI[]
  warnings: unknown[]
};
type Return = Array<UserGroup>;

/**
 * Get all groups in the specified course for the specified user.
 *
 * @location `/group/externallib.php`
 * @method `get_course_user_groups`
 * @since Moodle 2.9
 */
export default {
  ajax: false,
  authenticated: true,

  schema: <Parameters>{},
  name: "core_group_get_course_user_groups",
  handle (response) {
    return response.groups.map(UserGroup.fromAPI);
  }
} satisfies RequestHandler<Parameters, ResponseAPI, Return>;

