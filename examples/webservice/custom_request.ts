import { credentials } from "../_credentials";
import { WebService, type RequestHandler } from "../../src";

interface MyRequestParameters {
  user_id: number
  something_random: string
}

interface MyRequestResponseFromAPI {
  hello: string
  world: number
}

type MyRequestReturn = string;

const my_request = {
  // Is supported by AJAX endpoint ?
  ajax: false,
  // Should be authenticated ?
  authenticated: true,

  // An handler that will be called when the request is done.
  // Used to transform the response from the API to the return value.
  handle(response) {
    return response.hello + " " + response.world;
  },

  name: "my_request",
  // Yes, pass an empty object, it's just for typings.
  // (if anyone knows how to make it cleaner, please open an issue or PR !)
  schema: <MyRequestParameters>{}
} satisfies RequestHandler<MyRequestParameters, MyRequestResponseFromAPI, MyRequestReturn>;

void async function main () {
  if (!credentials.ws_token)
    throw new Error("Missing the WS_TOKEN in .env file.");

  const ws = new WebService(credentials.root, credentials.ws_token);

  // Use your custom `my_request` here.
  const returnValue = await ws.from(my_request).request({
    // You get intellisense here, properties are from `MyRequestParameters`.
    something_random: "random",
    user_id: 69420
  });

  console.log(returnValue); // Return type corresponds to `MyRequestReturn`.
}();
