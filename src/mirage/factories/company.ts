import { Factory } from "miragejs";
import { faker } from "@faker-js/faker";

export default Factory.extend({
  name() {
    return faker.company.name();
  },
  cnpj() {
    return faker.string.numeric('##.###.###/####-##');
  },
  email() {
    return faker.internet.email();
  },
  createdAt() {
    return faker.date.past();
  },
});
