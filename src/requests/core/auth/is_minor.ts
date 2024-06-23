import type { RequestHandler } from "~/utils/requests";

interface Parameters {
  /**
   * User age.
   */
  age: number

  /**
   * Country of residence.
   */
  country: string
}

type ResponseAPI = { status: boolean };
type Return = boolean;

/**
 * Requests a check if a user is a digital minor.
 *
 * @location `/auth/classes/external.php`
 * @method `is_minor`
 * @since Moodle 3.4
 */
export default {
  ajax: true,
  authenticated: false,

  name: "core_auth_is_minor",
  schema: <Parameters>{},
  handle (response) {
    return response.status;
  }
} satisfies RequestHandler<Parameters, ResponseAPI, Return>;
