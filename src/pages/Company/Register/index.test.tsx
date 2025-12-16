import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import CompanyRegistration from './index';
import { useRegisterCompany } from '@/hooks/useRegisterCompany';

// Mock the hook
vi.mock('@/hooks/useRegisterCompany');

const mockSubmitCompany = vi.fn();

describe('CompanyRegistration', () => {
  it('should call submitCompany with form data on submit', async () => {
    // Arrange
    (useRegisterCompany as jest.Mock).mockReturnValue({
      submitCompany: mockSubmitCompany,
      isLoading: false,
      error: null,
      isSuccess: false,
    });

    render(
      <BrowserRouter>
        <CompanyRegistration />
      </BrowserRouter>
    );

    // Act
    fireEvent.change(screen.getByLabelText(/nome da empresa/i), { target: { value: 'Tech Corp' } });
    fireEvent.change(screen.getByLabelText(/cnpj/i), { target: { value: '12345678901234' } });
    fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: 'contact@techcorp.com' } });
    fireEvent.click(screen.getByRole('button', { name: /cadastrar/i }));

    // Assert
    await waitFor(() => {
      expect(mockSubmitCompany).toHaveBeenCalledWith({
        name: 'Tech Corp',
        cnpj: '12345678901234',
        email: 'contact@techcorp.com',
      });
    });
  });

  it('should display success message when isSuccess is true', () => {
    // Arrange
    (useRegisterCompany as jest.Mock).mockReturnValue({
      submitCompany: mockSubmitCompany,
      isLoading: false,
      error: null,
      isSuccess: true,
    });

    render(
      <BrowserRouter>
        <CompanyRegistration />
      </BrowserRouter>
    );

    // Assert
    expect(screen.getByText(/empresa cadastrada com sucesso!/i)).toBeInTheDocument();
  });

  it('should display error message when an error is present', () => {
    // Arrange
    (useRegisterCompany as jest.Mock).mockReturnValue({
      submitCompany: mockSubmitCompany,
      isLoading: false,
      error: 'CNPJ já cadastrado',
      isSuccess: false,
    });

    render(
      <BrowserRouter>
        <CompanyRegistration />
      </BrowserRouter>
    );

    // Assert
    expect(screen.getByText(/cnpj já cadastrado/i)).toBeInTheDocument();
  });

  it('should disable the button when isLoading is true', () => {
    // Arrange
    (useRegisterCompany as jest.Mock).mockReturnValue({
      submitCompany: mockSubmitCompany,
      isLoading: true,
      error: null,
      isSuccess: false,
    });

    render(
      <BrowserRouter>
        <CompanyRegistration />
      </BrowserRouter>
    );

    // Assert
    expect(screen.getByRole('button', { name: /cadastrando.../i })).toBeDisabled();
  });
});
