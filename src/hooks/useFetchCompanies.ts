import { useQuery } from '@tanstack/react-query';
import { companyService } from '@/services/companyService';

export const useFetchCompanies = () => {
  const {
    data: companies,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['companies'],
    queryFn: companyService.findAll,
  });

  return {
    companies,
    isLoading,
    isError,
    error,
  };
};
