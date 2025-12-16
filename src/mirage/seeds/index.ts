import { Server } from "miragejs";
import type { AppRegistry } from "../types";

export default function (server: Server<AppRegistry>) {
  server.createList("company", 10);
}
