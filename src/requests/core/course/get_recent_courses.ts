import { type RecentCourseFromAPI, RecentCourse } from "~/models/RecentCourse";
import type { RequestHandler } from "~/utils/requests";

interface Parameters {
  /**
   * User ID from which the courses will be obtained.
   * @default 0 // defaults to current user.
   */
  userid?: number

  /**
   * Restrict result set to this amount.
   * @default 0
   */
  limit?: number

  /**
   * Skip this number of records from the start of the result set.
   * @default 0
   */
  offset?: number

  /**
   * SQL string for sorting.
   * @default null
   */
  sort?: string | null
}

type ResponseAPI = Array<RecentCourseFromAPI>;
type Return = Array<RecentCourse>;

/**
 * Get last accessed courses adding additional course information like images.
 *
 * @location `/course/externallib.php`
 * @method `get_recent_courses`
 * @since Moodle 3.6
 */
export default {
  ajax: true,
  authenticated: true,

  name: "core_course_get_recent_courses",
  schema: <Parameters>{},
  handle (response) {
    return response.map(RecentCourse.fromAPI);
  }
} satisfies RequestHandler<Parameters, ResponseAPI, Return>;
