import type { RequestHandler } from "~/utils/requests";
import type { Client } from "~/services/Client";

export class AJAX {
  readonly #client: Client;

  public constructor (client: Client) {
    this.#client = client;
  }

  public from<Request extends RequestHandler<Record<string, any>, any, any>>(request: Request) {
    if (!request.ajax)
      throw new Error(`${request.name} is not supported on AJAX endpoints.`);

    return {
      request: async (params: Request["schema"] = {}): Promise<ReturnType<Request["handle"]>> => {
        let url = `${this.#client.session.root}/lib/ajax/service.php`;
        url += `?sesskey=${this.#client.session.sessionKey}`;
        url += `&info=${request.name}`;

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Cookie": this.#client.cookies.join("; "),
            "Content-Type": "application/json"
          },
          body: JSON.stringify([{
            index: 0,
            methodname: request.name,
            args: params
          }])
        });

        const json = await response.json() as [{
          error: false,
          data: any // this is what we want
        }] | {
          error: string
          errorcode: string
        };

        if ("error" in json) {
          throw new Error(`(${json.errorcode}): ${json.error}`);
        }

        return request.handle(json[0].data);
      }
    };
  }
}
