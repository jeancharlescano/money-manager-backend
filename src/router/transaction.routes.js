import cors from "@fastify/cors";
import {
  createTransaction,
  getTransactions,
} from "../controller/transaction.controller.js";

const routes = async (fastify) => {
  fastify.register(cors, { origin: true });

  fastify.post("/", createTransaction);
  fastify.get("/", getTransactions);
};

export default routes;
