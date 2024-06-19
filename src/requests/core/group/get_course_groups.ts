import { UserGroup, type UserGroupFromAPI } from "~/models/UserGroup";
import type { RequestHandler } from "~/utils/requests";

interface Parameters {
  /**
   * ID of course.
   */
  courseid: number
}

// TODO
type ResponseAPI = unknown;
type Return = unknown;

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

  schema: <Parameters>{},
  name: "core_group_get_course_groups",
  handle (response) {
    // TODO
    throw new Error(this.name + ": response handler is not implemented.");
    // return response.groups.map(UserGroup.fromAPI);
  }
} satisfies RequestHandler<Parameters, ResponseAPI, Return>;

