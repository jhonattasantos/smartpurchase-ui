import React from 'react';
import { useFetchCompanies } from '@/hooks/useFetchCompanies';
import CompanyList from '@/components/Company/CompanyList';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';

const CompanyListPage: React.FC = () => {
  const { companies, isLoading, isError, error } = useFetchCompanies();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Empresas Cadastradas</h1>
      <Separator className="mb-4" />

      {isError && (
        <Alert variant="destructive">
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>
            {error instanceof Error ? error.message : 'Ocorreu um erro ao buscar as empresas.'}
          </AlertDescription>
        </Alert>
      )}

      <CompanyList companies={companies} isLoading={isLoading} />
    </div>
  );
};

export default CompanyListPage;
