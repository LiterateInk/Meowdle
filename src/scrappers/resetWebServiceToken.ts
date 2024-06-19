import * as cheerio from "cheerio";

/**
 * @returns the new token for that cannot be shown again.
 */
export const resetWebServiceToken = async (tokenID: string, root: string, sessionKey: string, cookies: string[]): Promise<string> => {
  const response = await fetch(root + "/user/managetoken.php", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cookie": cookies.join("; ")
    },
    body: `tokenid=${tokenID}&action=resetwstoken&confirm=1&sesskey=${sessionKey}`,
    method: "POST"
  });

  if (response.status !== 200)
    throw new Error(`Expected a 200 status code, got ${response.status}`);

  const html = await response.text();
  const $ = cheerio.load(html);

  const token = $("#copytoclipboardtoken").text().trim();
  return token;
};
