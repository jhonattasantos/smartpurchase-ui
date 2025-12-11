import React, { useState } from 'react';
import { useRegisterCompany } from '@/hooks/useRegisterCompany';
import './styles.css';

const CompanyRegistration: React.FC = () => {
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const { submitCompany, isLoading, error, isSuccess } = useRegisterCompany();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode adicionar validação manual se desejar
    await submitCompany({ name, cnpj, email });
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h1>Cadastro de Empresa</h1>
        
        {isSuccess && <p className="success-message">Empresa cadastrada com sucesso!</p>}
        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label htmlFor="name">Nome da Empresa</label>
          <input
            type="text"
            id="name"
            value={name}
            title='Nome da Empresa'
            alt='Nome da Empresa'
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cnpj">CNPJ</label>
          <input
            type="text"
            id="cnpj"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
};

export default CompanyRegistration;
