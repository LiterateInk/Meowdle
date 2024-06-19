import { type EnrolledUserFromAPI, EnrolledUser } from "~/models/EnrolledUser";

interface Parameters {
  courseid: number
}

type Response = Array<EnrolledUserFromAPI>;

/**
 * TODO: description
 */
const core_enrol_get_enrolled_users = {
  schema: {} as Parameters,
  name: "core_enrol_get_enrolled_users",
  handle (response: Response): Array<EnrolledUser> {
    return response.map(EnrolledUser.fromAPI);
  }
} as const;

export default core_enrol_get_enrolled_users;
