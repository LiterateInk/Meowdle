import type { RequestHandler } from "~/utils/requests";

interface Parameters {
  criteria?: Array<{
    key: string
    value: string | number
  }>
}

type ResponseAPI = unknown; // TODO
type Return = unknown; // TODO

/**
 * Get categories.
 *
 * @location `/course/externallib.php`
 * @method `get_categories`
 * @since Moodle 3.6
 */
export default {
  ajax: true,
  authenticated: true,

  name: "core_course_get_categories",
  schema: <Parameters>{},
  handle (response) {
    // TODO
    throw new Error("Not yet implemented.");
  }
} satisfies RequestHandler<Parameters, ResponseAPI, Return>;
