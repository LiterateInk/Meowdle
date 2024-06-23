import { clientFromCAS } from "../src";

const TICKET_URL = "http://moodle.localhost/login/index.php?authCAS=CAS&ticket=ST-XXX";

void async function main () {
  const client = await clientFromCAS(TICKET_URL);

  // Do whatever you want with `client` !
}();
