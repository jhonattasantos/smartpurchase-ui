import React from 'react';
import type { Company } from '@/types/company';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface CompanyListProps {
  companies: Company[] | undefined;
  isLoading: boolean;
}

const CompanyList: React.FC<CompanyListProps> = ({ companies, isLoading }) => {
  if (isLoading) {
    return <p>Carregando empresas...</p>;
  }

  if (!companies || companies.length === 0) {
    return <p>Nenhuma empresa cadastrada.</p>;
  }

  return (
    <Table>
      <TableCaption>Uma lista das empresas cadastradas recentemente.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nome da Empresa</TableHead>
          <TableHead>CNPJ</TableHead>
          <TableHead>E-mail</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {companies.map((company) => (
          <TableRow key={company.cnpj}>
            <TableCell>{company.name}</TableCell>
            <TableCell>{company.cnpj}</TableCell>
            <TableCell>{company.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CompanyList;
