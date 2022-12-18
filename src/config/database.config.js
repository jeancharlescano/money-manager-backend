import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "192.168.1.201",
  database: "moneymanager",
  password: "Jccano958624371*",
  port: 5432,
});

pool.connect;
