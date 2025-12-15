import { Server } from "miragejs";
import type { AppRegistry } from "../types";
import companyRoutes from "./company";

export default function (this: Server<AppRegistry>) {
  companyRoutes.call(this);
}

