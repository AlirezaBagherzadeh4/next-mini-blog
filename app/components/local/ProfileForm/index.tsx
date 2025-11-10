'use client';

import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { IUserProfile, IFavorite } from '@/app/shared/types/interface';
import { profileSchema } from '@/app/shared/validators/profile';
import { Field, Button, Dropdown } from '../../global';
import { updateProfile } from '@/app/shared/lib/api';

export interface IProfileForm {
  profile: IUserProfile;
  favorites: IFavorite[];
}

export const ProfileForm: React.FC<IProfileForm> = ({ profile, favorites }) => {
  const formMethods = useForm<IUserProfile>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      id: profile.id,
      name: profile.name,
      family: profile.family,
      email: profile.email,
      mobile: profile.mobile,
      dob: profile.dob,
      bio: profile.bio,
    },
  });
  const { handleSubmit } = formMethods;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: IUserProfile) => {
    console.log('data', data);
    try {
      setIsLoading(true);
      await updateProfile(data);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-fit w-fit flex-col items-center justify-between gap-8"
      >
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
        <Dropdown items={favorites} />
        <div className="self-start">
          <Button type="submit" disabled={isLoading} loading={isLoading}>
            Submit!
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
