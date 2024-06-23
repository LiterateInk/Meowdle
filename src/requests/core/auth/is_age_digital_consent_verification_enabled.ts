import type { RequestHandler } from "~/utils/requests";

type Parameters = {};
type ResponseAPI = { status: boolean };
type Return = boolean;

/**
 * Checks if age digital consent verification is enabled.
 *
 * @location `/auth/classes/external.php`
 * @method `is_age_digital_consent_verification_enabled`
 * @since Moodle 3.3
 */
export default {
  ajax: true,
  authenticated: false,

  name: "core_auth_is_age_digital_consent_verification_enabled",
  schema: <Parameters>{},
  handle (response) {
    return response.status;
  }
} satisfies RequestHandler<Parameters, ResponseAPI, Return>;
