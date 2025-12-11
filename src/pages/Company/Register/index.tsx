import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegisterCompany } from '@/hooks/useRegisterCompany';
import type { CompanySchema } from '@/schemas/companySchema';
import { companySchema } from '@/schemas/companySchema';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
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
        {isSuccess && <p className="success-message">Empresa cadastrada com sucesso!</p>}
        {error && <p className="error-message">{error}</p>}

        <FieldGroup>
          <FieldSet>
            <FieldLegend>Formulário de Cadastro</FieldLegend>
            <FieldDescription>Preencha os dados da empresa abaixo:</FieldDescription>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Nome da Empresa</FieldLabel>
                <Input type="text" id="name" {...register('name')} placeholder='Digite o nome da empresa' />
                {errors.name && <p className="error-message">{errors.name.message}</p>}
              </Field>
            </FieldGroup>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="cnpj">CNPJ</FieldLabel>
                <Input type="text" id="cnpj" {...register('cnpj')} placeholder='Digite o CNPJ da empresa' />
                {errors.cnpj && <p className="error-message">{errors.cnpj.message}</p>}
              </Field>
            </FieldGroup>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">E-mail</FieldLabel>
                <Input type="email" id="email" {...register('email')} placeholder='Digite o e-mail da empresa' />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
              </Field>
            </FieldGroup>

            <Button disabled={isLoading} variant="outline" type="submit">
              {isLoading ? 'Cadastrando...' : 'Cadastrar'}
            </Button>

          </FieldSet>
        </FieldGroup>
        
      </form>
    </div>
  );
};

export default CompanyRegistration;
