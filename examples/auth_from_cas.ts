import { Authenticator } from "../src";

const TICKET_URL = "http://moodle.localhost/login/index.php?authCAS=CAS&ticket=ST-XXX";

void async function main () {
  const authenticator = new Authenticator();
  const client = await authenticator.fromCAS(TICKET_URL);

  // Do whatever you want with `client` !
}();
