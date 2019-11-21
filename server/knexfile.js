const path = require("path");

// Update with your config settings.
require("dotenv").config({ path: "../.env" });

module.exports = {
  client: "postgresql",
  connection: {
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_CONTAINER_NAME,
    host: process.env.POSTGRES_HOSTNAME
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations",
    directory: path.join(__dirname, "database", "migrations")
  },
  seeds: {
    directory: path.join(__dirname, "database", "seeds")
  }
};
