import api from './api';
import type { Company } from '@/types/company';

export const companyService = {
  submit: async (companyData: Company): Promise<Company> => {
    const { data } = await api.post<Company>('/companies', companyData);
    return data;
  },
};
