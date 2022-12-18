import buildApp from "./app.js";
const fastify = await buildApp();
import * as dotenv from "dotenv";

dotenv.config();

try {
 fastify.listen({port: 5000,host:'0.0.0.0'}).then((adress)=> {console.log(adress)});
}catch (error) {
  fastify.log.error(error);
  process.exit(1);
}
