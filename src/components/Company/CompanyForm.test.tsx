import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CompanyForm from '@/components/Company/CompanyForm';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { companySchema } from '@/schemas/companySchema';
import type { CompanySchema } from '@/schemas/companySchema';

// Wrapper component to provide form context
const TestWrapper = (props: Partial<React.ComponentProps<typeof CompanyForm>>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanySchema>({
    resolver: zodResolver(companySchema),
  });

  const defaultProps = {
    register,
    handleSubmit,
    errors,
    isLoading: false,
    isSuccess: false,
    error: null,
    onSubmit: vi.fn(),
    ...props,
  };

  return <CompanyForm {...defaultProps} />;
};

describe('CompanyForm', () => {
  it('should render all form fields', () => {
    render(<TestWrapper />);
    expect(screen.getByLabelText(/nome da empresa/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/cnpj/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cadastrar/i })).toBeInTheDocument();
  });

  it('should display loading state when isLoading is true', () => {
    render(<TestWrapper isLoading={true} />);
    expect(screen.getByRole('button', { name: /cadastrando.../i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cadastrando.../i })).toBeDisabled();
  });

  it('should display success message when isSuccess is true', () => {
    render(<TestWrapper isSuccess={true} />);
    expect(screen.getByText(/empresa cadastrada com sucesso!/i)).toBeInTheDocument();
  });

  it('should display error message when error is present', () => {
    render(<TestWrapper error="CNPJ já cadastrado" />);
    expect(screen.getByText(/cnpj já cadastrado/i)).toBeInTheDocument();
  });
});