import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import CompanyListPage from './index';
import { useFetchCompanies } from '@/hooks/useFetchCompanies';
import type { Company } from '@/types/company';

vi.mock('@/hooks/useFetchCompanies');

afterEach(() => {
  cleanup();
});

const mockCompanies: Company[] = [
  { name: 'InnovateTech', cnpj: '12345678000199', email: 'contact@innovatetech.com' },
];

describe('CompanyListPage', () => {
  it('should display loading state initially', () => {
    (useFetchCompanies as vi.Mock).mockReturnValue({
      companies: undefined,
      isLoading: true,
      isError: false,
      error: null,
    });

    render(<CompanyListPage />);
    expect(screen.getByText('Carregando empresas...')).toBeInTheDocument();
  });

  it('should display an error message if fetching fails', () => {
    (useFetchCompanies as vi.Mock).mockReturnValue({
      companies: undefined,
      isLoading: false,
      isError: true,
      error: new Error('Failed to fetch'),
    });

    render(<CompanyListPage />);
    expect(screen.getByText('Erro')).toBeInTheDocument();
    expect(screen.getByText('Failed to fetch')).toBeInTheDocument();
  });

  it('should display the company list when data is fetched successfully', () => {
    (useFetchCompanies as vi.Mock).mockReturnValue({
      companies: mockCompanies,
      isLoading: false,
      isError: false,
      error: null,
    });

    render(<CompanyListPage />);
    expect(screen.getByText('InnovateTech')).toBeInTheDocument();
    expect(screen.getByText('12345678000199')).toBeInTheDocument();
  });

  it('should display a message when no companies are available', () => {
    (useFetchCompanies as vi.Mock).mockReturnValue({
      companies: [],
      isLoading: false,
      isError: false,
      error: null,
    });

    render(<CompanyListPage />);
    expect(screen.getByText('Nenhuma empresa cadastrada.')).toBeInTheDocument();
  });
});
