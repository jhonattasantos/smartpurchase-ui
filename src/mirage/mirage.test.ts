import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { makeServer } from './index';
import { Server } from 'miragejs';

describe('MirageJS Server', () => {
  let server: Server;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should intercept a POST request to /api/companies and return a success response', async () => {
    const companyData = {
      name: 'Test Company',
      cnpj: '12345678901234',
      email: 'test@company.com',
    };

    const response = await fetch('/api/companies', {
      method: 'POST',
      body: JSON.stringify(companyData),
    });

    const responseData = await response.json();

    expect(response.status).toBe(201);
    expect(responseData.company).toBeDefined();
    expect(responseData.company.name).toBe('Test Company');
  });

  it('should return a 400 error if required fields are missing', async () => {
    const incompleteData = {
      name: 'Incomplete Company',
    };

    const response = await fetch('/api/companies', {
      method: 'POST',
      body: JSON.stringify(incompleteData),
    });

    const errorData = await response.json();

    expect(response.status).toBe(400);
    expect(errorData.error).toBe('Todos os campos são obrigatórios');
  });
});
