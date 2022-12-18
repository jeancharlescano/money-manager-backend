import {fastify} from "fastify";

import transactionRoutes from "./router/transaction.routes.js";

export const server = fastify();

const buildApp = async () => {
  server.register(transactionRoutes, { prefix: "/tx" });
  return server;
};
export default buildApp;
