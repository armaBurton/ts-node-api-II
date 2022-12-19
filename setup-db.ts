import { pool } from "./src/utils/pool";
import { setupServer } from "./data/setup";

setupServer(pool)
  .catch((err) => console.error(`*** ${err} ***`))
  .finally(() => process.exit());
