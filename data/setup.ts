import { promises as fs } from "fs";

module.exports = async (pool: any) => {
  return fs
    .readFile(`${__dirname}/../sql/setup.sql`, { encoding: "utf-8" })
    .then((sql: any) => pool.query(sql))
    .then(() => console.log("✅ Database setup complete!"))
    .catch((err) => {
      const dbNotFound = err.message.match(/database "(.+)" does not exist/i);

      if (dbNotFound) {
        const [err, db] = dbNotFound;
        console.error("❌ Error: " + err);
        console.info(
          `Try running \`createdb -U postgres ${db}\` in your terminal`
        );
      } else {
        console.error(err);
        console.error("❌ Error: " + err.message);
      }
    });
};
