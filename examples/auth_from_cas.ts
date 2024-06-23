import { authenticateFromCAS } from "../src";

const TICKET_URL = "http://moodle.localhost/login/index.php?authCAS=CAS&ticket=ST-XXX";

void async function main () {
  const client = await authenticateFromCAS(TICKET_URL);

  // Do whatever you want with `client` !
}();
