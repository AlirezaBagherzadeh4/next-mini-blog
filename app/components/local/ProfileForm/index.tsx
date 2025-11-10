'use client';

import { useState } from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { IUserProfile, IFavorite } from '@/app/shared/types/interface';
import { profileSchema } from '@/app/shared/validators/profile';
import { Field, Button, Dropdown } from '../../global';
import { updateProfile } from '@/app/shared/lib/api';
import { toast } from 'sonner';

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
      favorites: profile.favorites,
      bio: profile.bio,
    },
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: IUserProfile) => {
    try {
      setIsLoading(true);
      await updateProfile({
        name: data.name,
        family: data.family,
        mobile: data.mobile,
        dob: data.dob,
        favorites: data.favorites,
        bio: data.bio,
      });
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error('َُFailed to update profile!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className="flex h-fit w-full flex-col items-center justify-between gap-8 md:w-fit"
      >
        <div className="flex h-fit w-full flex-col items-center justify-between gap-4 md:flex-row">
          <Field label="name" name="name" type="text" required />
          <Field label="family" name="family" type="text" required />
        </div>
        <div className="flex h-fit w-full flex-col items-center justify-between gap-4 md:flex-row">
          <Field label="email" name="email" type="email" disabled />
          <Field label="mobile" name="mobile" type="tel" required />
        </div>
        <div className="flex h-fit w-full flex-col items-center justify-between gap-4 md:flex-row">
          <Field label="date of birth" name="dob" type="date" />
          <Controller
            name={'favorites'}
            control={formMethods.control}
            defaultValue={[]}
            render={({ field }) => (
              <Dropdown
                {...field}
                options={favorites}
                selected={formMethods.getValues('favorites') ?? []}
                onChange={(favorites) =>
                  formMethods.setValue('favorites', favorites)
                }
                placeholder="Select a dog breed..."
                emptyText="No dog breeds found."
                label="favorites"
              />
            )}
          />
        </div>
        <Field label="bio" name="bio" type="text" />
        <div className="self-center md:self-start">
          <Button type="submit" disabled={isLoading} loading={isLoading}>
            Submit!
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
