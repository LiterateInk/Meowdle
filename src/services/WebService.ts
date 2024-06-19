import type { Methods, MethodMap } from "~/requests";

export class WebService {
  public constructor (public token: string, public root: string) {}

  public from<N extends Methods["name"]>(method: Methods & { name: N }) {
    return {
      request: async (params: MethodMap[N]["schema"] = {}): Promise<ReturnType<MethodMap[N]["handle"]>> => {
        let url = `${this.root}/webservice/rest/server.php`;
        url += `?wstoken=${encodeURIComponent(this.token)}`;
        url += "&moodlewsrestformat=json";
        url += `&wsfunction=${encodeURIComponent(method.name)}`;

        for (const [key, value] of Object.entries(params)) {
          url += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }

        const response = await fetch(url);
        const json = await response.json() as any| {
          exception: string
          errorcode: string
          message: string
        };

        if ("exception" in json) {
          throw new Error(`(${json.errorcode}): ${json.message}`);
        }

        return method.handle(json) as ReturnType<MethodMap[N]["handle"]>;
      }
    };
  }
}
