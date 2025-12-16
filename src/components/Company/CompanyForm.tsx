import React from 'react';
import type { UseFormRegister, FieldErrors, UseFormHandleSubmit, SubmitHandler } from 'react-hook-form';
import type { CompanySchema } from '@/schemas/companySchema';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"

interface CompanyFormProps {
  register: UseFormRegister<CompanySchema>;
  handleSubmit: UseFormHandleSubmit<CompanySchema>;
  errors: FieldErrors<CompanySchema>;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  onSubmit: SubmitHandler<CompanySchema>;
}

const CompanyForm: React.FC<CompanyFormProps> = ({
  register,
  handleSubmit,
  errors,
  isLoading,
  isSuccess,
  error,
  onSubmit,
}) => {
  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        {isSuccess && <p className="success-message">Empresa cadastrada com sucesso!</p>}
        {error && <p className="error-message">{error}</p>}

        <FieldGroup>
          <FieldSet>
          <h1>Cadastro de Empresa</h1>
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

export default CompanyForm;