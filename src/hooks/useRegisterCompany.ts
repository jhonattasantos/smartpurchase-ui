import { useState } from 'react';
import { companyService } from '@/services/companyService';
import type { Company } from '@/types/company';

export const useRegisterCompany = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const submitCompany = async (companyData: Company) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);
    try {
      await companyService.submit(companyData);
      setIsSuccess(true);
    } catch (err) {
      setError('Ocorreu um erro ao cadastrar a empresa.');
    } finally {
      setIsLoading(false);
    }
  };

  return { submitCompany, isLoading, error, isSuccess };
};
