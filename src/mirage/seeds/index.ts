import { Server } from "miragejs";

export default function (server: Server) {
  server.createList("company", 10);
}
