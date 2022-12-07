import buildApp from "./app.js";
const fastify = await buildApp();
import * as dotenv from "dotenv";

dotenv.config();

try {
  fastify.listen({ port: process.env.APP_PORT }, () => {
    console.log("Server start on port : ", process.env.APP_PORT);
  });
} catch (error) {
  fastify.log.error(error);
  process.exit(1);
}
