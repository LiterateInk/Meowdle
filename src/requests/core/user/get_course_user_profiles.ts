import type { RequestHandler } from "~/utils/requests";

interface Parameters {
  /**
   * Array of user IDs and according course IDs.
   */
  userlist: Array<{
    userid: number | null,
    courseid: number | null
  }>
}

type ResponseAPI = unknown; // TODO
type Return = unknown; // TODO

/**
 * Get course participant's details
 *
 * @location `/user/externallib.php`
 * @method `get_course_user_profiles`
 * @since Moodle 2.2
 */
export default {
  ajax: false,
  authenticated: true,

  schema: <Parameters>{},
  name: "core_user_get_course_user_profiles",
  handle (response) {
    // TODO
    throw new Error("Not yet implemented.");
  }
} satisfies RequestHandler<Parameters, ResponseAPI, Return>;
