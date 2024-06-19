import { type EnrolledUserFromAPI, EnrolledUser } from "~/models/EnrolledUser";

interface Parameters {
  /** The course ID. */
  courseid: number

  /** Possible options. */
  options?: Array<(
    | {
      name: "withcapability" | "userfields"
      value: string
    }
    | {
      name: "onlyactive" | "onlysuspended"
      value: boolean
    }
    | {
      name: "groupid" | "limitfrom" | "limitnumber"
      value: number
    }
    | {
      name: "sortby"
      value: "id" | "firstname" | "lastname" | "siteorder"
    }
    | {
      name: "sortdirection"
      value: "ASC" | "DESC"
    }
  )>
}

type Response = Array<EnrolledUserFromAPI>;

/**
 * Get course participants details.
 *
 * @location `/enrol/externallib.php`
 * @method `get_enrolled_users`
 * @since Moodle 2.1
 */
export default {
  ajax: false,
  authenticated: true,

  schema: {} as Parameters,
  name: "core_enrol_get_enrolled_users",
  handle (response: Response): Array<EnrolledUser> {
    return response.map(EnrolledUser.fromAPI);
  }
} as const;
