'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import type { IUserProfile } from '@/app/shared/types/interface';
import { updateProfile } from '@/app/shared/lib/api';

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: IUserProfile) =>
      updateProfile({
        name: data.name,
        family: data.family,
        mobile: data.mobile,
        dob: data.dob,
        favorites: data.favorites,
        bio: data.bio,
      }),
    onSuccess: () => {
      toast.success('Profile updated successfully!');
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
    onError: () => {
      toast.error('Failed to update profile!');
    },
  });

  return mutation;
};
