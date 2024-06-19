import * as cheerio from "cheerio";

import type { Token } from "~/models/Token";
import { RSSToken } from "~/models/RSSToken";
import { WebServiceToken } from "~/models/WebServiceToken";

export const listTokens = async (root: string, cookies: string[]): Promise<Array<Token>> => {
  const url = root + "/user/managetoken.php";
  const response = await fetch(url, {
    headers: {
      "Cookie": cookies.join("; ")
    }
  });

  if (response.status !== 200)
    throw new Error(`Expected a 200 status code, got ${response.status}`);

  const html = await response.text();
  const $ = cheerio.load(html);

  let table_index = 0; // 0 = WebService, 1 = RSS

  const tokens: Array<Token> = $("tbody").map((_, el) => {
    // first table is always WebService
    // so next one is RSS
    table_index++;

    return $(el).find("tr").map((_, el) => {
      const tds = $(el).find("td");

      if (table_index === 1) {
        const resetURL = new URL(tds.eq(5).children().attr("href")!.trim());

        return new WebServiceToken(
          resetURL.searchParams.get("tokenid")!,
          tds.eq(0).text().trim(),
          tds.eq(1).text().trim(),
          tds.eq(2).text().trim() || null,
          tds.eq(3).text().trim() || null,
          tds.eq(4).text().trim(),
          tds.eq(4).children().attr("href")!.trim()
        );
      }
      else {
        return new RSSToken(
          tds.eq(0).text().trim()
        );
      }
    }).get();
  }).get();

  return tokens;
};
