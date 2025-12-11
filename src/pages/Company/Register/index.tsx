import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegisterCompany } from '@/hooks/useRegisterCompany';
import type { CompanySchema } from '@/schemas/companySchema';
import { companySchema } from '@/schemas/companySchema';
import './styles.css';

const CompanyRegistration: React.FC = () => {
  const { submitCompany, isLoading, error, isSuccess } = useRegisterCompany();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanySchema>({
    resolver: zodResolver(companySchema),
  });

  const onSubmit = async (data: CompanySchema) => {
    await submitCompany(data);
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Cadastro de Empresa</h1>
        
        {isSuccess && <p className="success-message">Empresa cadastrada com sucesso!</p>}
        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label htmlFor="name">Nome da Empresa</label>
          <input type="text" id="name" {...register('name')} />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="cnpj">CNPJ</label>
          <input type="text" id="cnpj" {...register('cnpj')} />
          {errors.cnpj && <p className="error-message">{errors.cnpj.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" {...register('email')} />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>
        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
};

export default CompanyRegistration;
