import {
  Database,
  PostgresConnector,
} from "https://deno.land/x/denodb@v1.0.40/mod.ts";
import Beer from "./models/beer.ts";

export default class DataBase {
  connector: PostgresConnector;
  db: Database;

  constructor() {
    this.connector = this.connect();
    this.db = new Database(this.connector, true);
    this.syncModels();
  }

  private connect() {
    return new PostgresConnector({
      database: "postgres",
      host: "localhost",
      password: "docker",
      username: "postgres",
      port: 5432,
    });
  }

  private syncModels() {
    this.db.link([Beer]);

    this.db.sync();
  }
}
