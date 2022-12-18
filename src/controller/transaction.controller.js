import { pool } from "../config/database.config.js";
pool.connect;

export const createTransaction = async (req, _rep) => {
  const { amount, isEarning, paymentType, description, date } = req.body;
  console.log(
    "🚀 ~ file: transaction.controller.js:6 ~ createTransaction ~ date",
    date
  );

  try {
    const result = await pool.query(
      `INSERT INTO transactions (amount, is_earning, payment_type, description, date) VALUES ($1, $2, $3, $4, $5);`,
      [amount, isEarning, paymentType, description, date]
    );
    return result;
  } catch (error) {
    console.log(
      "🚀 ~ file: transaction.controller.js:14 ~ createTransaction ~ error",
      error
    );
  }
};

export const getTransactions = async () => {
  try {
    const result = await pool.query(
      "SELECT * FROM transactions ORDER BY id DESC"
    );
    return result.rows;
  } catch (err) {
    console.log(
      "🚀 ~ file: transaction.controller.js:28 ~ getTransactions ~ err",
      err
    );
  }
};
