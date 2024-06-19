import { config } from "dotenv";
import { join } from "node:path";
// Load the `.env` file configuration.
config({ path: join(__dirname, ".env") });

export const credentials = {
  ws_token: process.env.WS_TOKEN,
  root: process.env.ROOT!
};
