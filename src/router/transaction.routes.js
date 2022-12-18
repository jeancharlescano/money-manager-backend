import cors from "@fastify/cors";
import {
  createTransaction,
  getTransactions,
  getTransactionById
} from "../controller/transaction.controller.js";

const routes = async (fastify) => {
  fastify.register(cors, { origin: true });

  fastify.post("/", createTransaction);
  fastify.get("/", getTransactions);
  fastify.get("/:id", getTransactionById);
};

export default routes;
