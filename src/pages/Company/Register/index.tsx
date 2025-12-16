import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegisterCompany } from '@/hooks/useRegisterCompany';
import type { CompanySchema } from '@/schemas/companySchema';
import { companySchema } from '@/schemas/companySchema';
import CompanyForm from '@/components/Company/CompanyForm';
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
    <CompanyForm
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      isLoading={isLoading}
      isSuccess={isSuccess}
      error={error}
      onSubmit={onSubmit}
    />
  );
};

export default CompanyRegistration;
