import type { MethodMap, Methods } from "~/requests";
import type { Client } from "~/services/Client";

export class AJAX {
  readonly #client: Client;

  public constructor (client: Client) {
    this.#client = client;
  }

  public from<N extends Methods["name"]>(method: Methods & { name: N }) {
    if (!method.ajax)
      throw new Error(`${method.name} is not supported on AJAX endpoints.`);

    return {
      request: async (params: MethodMap[N]["schema"] = {}): Promise<ReturnType<MethodMap[N]["handle"]>> => {
        let url = `${this.#client.session.root}/lib/ajax/service.php`;
        url += `?sesskey=${this.#client.session.sessionKey}`;
        url += `&info=${method.name}`;

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Cookie": this.#client.cookies.join("; "),
            "Content-Type": "application/json"
          },
          body: JSON.stringify([{
            index: 0,
            methodname: method.name,
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

        if ("error" in json && "errorcode" in json) {
          throw new Error(`(${json.errorcode}): ${json.error}`);
        }

        return method.handle(json[0].data) as ReturnType<MethodMap[N]["handle"]>;
      }
    };
  }
}
