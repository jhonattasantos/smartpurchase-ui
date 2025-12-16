import api from './api';
import type { Company } from '@/types/company';

export const companyService = {
  submit: async (companyData: Company): Promise<Company> => {
    const { data } = await api.post<{ company: Company }>('/api/companies', companyData);
    return data.company;
  },

  findAll: async (): Promise<Company[]> => {
    const { data } = await api.get<{ companies: Company[] }>('/api/companies');
    return data.companies;
  },
};
