'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IUserProfile } from '@/app/shared/types';
import { profileSchema } from '@/app/shared/validators/profile';
import { Field } from '../../global';

export const ProfileForm: React.FC<IUserProfile> = ({
  id,
  name,
  family,
  email,
  mobile,
  dob,
  bio,
}) => {
  const formMethods = useForm<IUserProfile>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      id,
      name,
      family,
      email,
      mobile,
      dob,
      bio,
    },
  });

  return (
    <FormProvider {...formMethods}>
      <form className="flex h-fit w-fit flex-col items-center justify-between gap-8 rounded-lg border border-black p-16">
        <div className="flex h-fit w-full items-center justify-between gap-4">
          <Field label="name" name="name" type="text" required />
          <Field label="family" name="family" type="text" required />
        </div>
        <div className="flex h-fit w-full items-center justify-between gap-4">
          <Field label="email" name="email" type="email" disabled />
          <Field label="mobile" name="mobile" type="tel" required />
        </div>
        <div className="flex h-fit w-full items-center justify-between gap-4">
          <Field label="date of birth" name="dob" type="date" />
          <Field label="bio" name="bio" type="text" />
        </div>
      </form>
    </FormProvider>
  );
};
