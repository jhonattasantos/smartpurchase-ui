import { Response, Server } from "miragejs";
import type { AppRegistry } from "../types";

export default function (this: Server<AppRegistry>) {
  this.get("/companies", (schema) => {
    return schema.all("company");
  });

  this.post("/companies", (schema, request) => {
    const attrs = JSON.parse(request.requestBody);

    if (!attrs.name || !attrs.cnpj || !attrs.email) {
      return new Response(400, {}, { error: "Todos os campos são obrigatórios" });
    }

    const newCompany = schema.create("company", attrs);
    return new Response(201, {}, { company: newCompany });
  });
}
