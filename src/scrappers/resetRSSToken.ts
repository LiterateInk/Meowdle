export const resetRSSToken = async (root: string, sessionKey: string, cookies: string[]): Promise<void> => {
  const response = await fetch(root + "/user/managetoken.php", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cookie": cookies.join("; ")
    },
    body: "action=resetrsstoken&confirm=1&sesskey=" + sessionKey,
    method: "POST"
  });

  if (response.status !== 303)
    throw new Error(`Expected a 303 status code, got ${response.status}`);
};
