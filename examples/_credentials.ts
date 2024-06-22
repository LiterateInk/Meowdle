import { config } from "dotenv";
import { join } from "node:path";
// Load the `.env` file configuration.
config({ path: join(__dirname, ".env") });

if (!process.env.ROOT)
  throw new Error("Missing the ROOT in .env file.");

export const credentials = {
  ws_token: process.env.WS_TOKEN,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  root: process.env.ROOT!
};
