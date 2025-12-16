import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

// Função auxiliar para gerar um CNPJ no formato XX.XXX.XXX/0001-XX
const generateCnpj = () => {
  const n = () => Math.floor(Math.random() * 10);
  return `${n()}${n()}.${n()}${n()}${n()}.${n()}${n()}${n()}/0001-${n()}${n()}`;
};

export default Factory.extend({
  name() {
    return faker.company.name();
  },
  cnpj() {
    return generateCnpj();
  },
  email() {
    return faker.internet.email().toLowerCase();
  },
});