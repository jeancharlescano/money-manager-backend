import { pool } from "../config/database.config.js";
pool.connect;

export const createTransaction = async (req, _rep) => {
  const { amount, isEarning, paymentType, description, date } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO transactions (amount, is_earning, payment_type, description, date) VALUES ($1, $2, $3, $4, $5);`,
      [amount, isEarning, paymentType, description, date]
    );
    return result;
  } catch (error) {
    0;
    console.log(
      "🚀 ~ file: data.controller.js ~ line 15 ~ createData ~ error",
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
      "🚀 ~ file: data.controller.js ~ line 24 ~ getDatas ~ err",
      err
    );
  }
};

export const getTransactionById = async (req, rep) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `SELECT * FROM transactions WHERE id = $1`,
      [id]
    );
    return result.rows;
  } catch (error) {
    console.log(
      "🚀 ~ file: transaction.controller.js:40 ~ getTransactionById ~ error",
      error
    );
  }
};
