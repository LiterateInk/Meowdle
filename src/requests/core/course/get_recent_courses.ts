import { type RecentCourseFromAPI, RecentCourse } from "~/models/RecentCourse";

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

type Response = Array<RecentCourseFromAPI>;

/**
 * Get last accessed courses adding additional course information like images.
 *
 * @location `/course/externallib.php`
 * @method `get_recent_courses`
 */
export default {
  schema: {} as Parameters,
  name: "core_course_get_recent_courses",
  handle (response: Response): Array<RecentCourse> {
    return response.map(RecentCourse.fromAPI);
  }
};
