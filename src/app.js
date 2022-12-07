import Fastify from "fastify";

import transactionRoutes from "./router/transaction.routes.js";

export const fastify = Fastify();

const buildApp = async () => {
  fastify.register(transactionRoutes, { prefix: "/tx" });
  return fastify;
};
export default buildApp;
