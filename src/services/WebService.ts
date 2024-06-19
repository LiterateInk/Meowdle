import type { RequestHandler } from "~/utils/requests";

export class WebService {
  public constructor (public token: string, public root: string) {}

  public from<Request extends RequestHandler<Record<string, any>, any, any>>(request: Request) {
    return {
      request: async (params: Request["schema"] = {}): Promise<ReturnType<Request["handle"]>> => {
        let url = `${this.root}/webservice/rest/server.php`;
        url += `?wstoken=${encodeURIComponent(this.token)}`;
        url += "&moodlewsrestformat=json";
        url += `&wsfunction=${encodeURIComponent(request.name)}`;

        for (const [key, value] of Object.entries(params)) {
          url += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }

        const response = await fetch(url);
        const json = await response.json() as any | {
          exception: string
          errorcode: string
          message: string
        };

        if ("exception" in json) {
          throw new Error(`(${json.errorcode}): ${json.message}`);
        }

        return request.handle(json);
      }
    };
  }
}
