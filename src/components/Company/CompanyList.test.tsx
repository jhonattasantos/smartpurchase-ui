import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CompanyList from './CompanyList';
import type { Company } from '@/types/company';

const mockCompanies: Company[] = [
  { name: 'InnovateTech', cnpj: '12345678000199', email: 'contact@innovatetech.com' },
  { name: 'QuantumLeap', cnpj: '87654321000188', email: 'info@quantumleap.com' },
];

describe('CompanyList', () => {
  it('should display a loading message when isLoading is true', () => {
    render(<CompanyList companies={undefined} isLoading={true} />);
    expect(screen.getByText('Carregando empresas...')).toBeInTheDocument();
  });

  it('should display a message when no companies are available', () => {
    render(<CompanyList companies={[]} isLoading={false} />);
    expect(screen.getByText('Nenhuma empresa cadastrada.')).toBeInTheDocument();
  });

  it('should render the table with company data', () => {
    render(<CompanyList companies={mockCompanies} isLoading={false} />);

    // Check for headers
    expect(screen.getByText('Nome da Empresa')).toBeInTheDocument();
    expect(screen.getByText('CNPJ')).toBeInTheDocument();
    expect(screen.getByText('E-mail')).toBeInTheDocument();

    // Check for company data
    expect(screen.getByText('InnovateTech')).toBeInTheDocument();
    expect(screen.getByText('12345678000199')).toBeInTheDocument();
    expect(screen.getByText('contact@innovatetech.com')).toBeInTheDocument();

    expect(screen.getByText('QuantumLeap')).toBeInTheDocument();
    expect(screen.getByText('87654321000188')).toBeInTheDocument();
    expect(screen.getByText('info@quantumleap.com')).toBeInTheDocument();
  });
});
