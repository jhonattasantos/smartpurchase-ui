import { z } from 'zod';

export const companySchema = z.object({
  name: z.string().min(1, 'O nome da empresa é obrigatório.'),
  cnpj: z.string().length(14, 'O CNPJ deve ter 14 dígitos.'),
  email: z.string().email('O e-mail informado é inválido.'),
});

export type CompanySchema = z.infer<typeof companySchema>;
