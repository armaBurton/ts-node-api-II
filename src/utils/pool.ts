import { Pool } from "pg";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/.env" });

console.log(process.env.PORT);

export const pool = new Pool({
  user: "postgres",
  host: "localhose",
  password: "13013",
  database: "db",
  port: parseInt(process.env.PORT || "7000"),
});
