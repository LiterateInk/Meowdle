import { MOODLE_OFFICIAL_MOBILE_SERVICE } from "~/utils/constants";
import { MoodleError } from "~/errors/MoodleError";

/**
 * Obtain a token to use with web services API from a username and password.
 * @see https://github.com/moodle/moodle/blob/master/login/token.php
 * @param root The root URL of the Moodle site, e.g. "http://localhost".
 * @param username The username of the user.
 * @param password The password of the user.
 * @param serviceName The service name to use, defaults to "moodle_mobile_app".
 * @returns A token to use with web services API.
 */
export async function obtainWebServiceTokenFromCredentials (root: string, username: string, password: string, serviceName = MOODLE_OFFICIAL_MOBILE_SERVICE): Promise<string> {
  const url = root + "/login/token.php"
    + "?username=" + encodeURIComponent(username)
    + "&password=" + encodeURIComponent(password)
    + "&service=" + serviceName;

  const response = await fetch(url);
  const json = await response.json() as {
    token: string
    privatetoken: null // NOTE: Not sure what this is for.
  } | {
    error: string,
    errorcode: string
  };

  if ("error" in json && "errorcode" in json) {
    throw new MoodleError(json.error, json.errorcode);
  }

  return json.token;
}
