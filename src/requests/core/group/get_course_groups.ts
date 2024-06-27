import { Group, type GroupFromAPI } from "~/models/Group";
import type { RequestHandler } from "~/utils/requests";

interface Parameters {
  /**
   * ID of course.
   */
  courseid: number
}

type ResponseAPI = GroupFromAPI[];
type Return = Group[];

/**
 * Get all groups in the specified course.
 *
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
    return response.map(Group.fromAPI);
  }
} satisfies RequestHandler<Parameters, ResponseAPI, Return>;
