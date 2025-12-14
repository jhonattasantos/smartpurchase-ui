import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import CompanyRegistration from './index';

// Mock do hook useRegisterCompany
vi.mock('@/hooks/useRegisterCompany', () => ({
  useRegisterCompany: () => ({
    submitCompany: vi.fn(),
    isLoading: false,
    error: null,
    isSuccess: false,
  }),
}));

describe('CompanyRegistration', () => {
  it('should render the registration form', () => {
    render(
      <BrowserRouter>
        <CompanyRegistration />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading', { name: /cadastro de empresa/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/nome da empresa/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/cnpj/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cadastrar/i })).toBeInTheDocument();
  });
});
