import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { APP_HOST, APP_PORT } from "./config.ts";
import DB from "./db.ts";
import router from "./routes.ts";
//import router from "./routes.ts";
//import _404 from "./controllers/404.ts";
//import errorHandler from "./controllers/errorHandler.ts";

const { db } = new DB();

const app = new Application();

app.use(router.routes());

//app.use(errorHandler);
//app.use(router.routes());
//app.use(router.allowedMethods());
//app.use(_404);

console.log(`Listening on port:${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
