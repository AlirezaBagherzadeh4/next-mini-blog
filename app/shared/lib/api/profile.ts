import {
  ProfileUpdateInput,
  profileUpdateSchema,
} from '@/app/shared/validators/profile';
import { IUserProfile } from '../../types/interface';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';

export const fetchProfile = async (): Promise<IUserProfile> => {
  const res = await fetch(`${API_URL}/profile`, { next: { revalidate: 0 } });
  if (!res.ok) throw new Error('Failed to fetch profile');
  return res.json();
};

export const updateProfile = async (data: ProfileUpdateInput) => {
  const profile = await fetchProfile();
  const parsed = profileUpdateSchema.safeParse(data);

  if (!parsed.success) {
    console.error('❌ Zod validation failed:', parsed.error.flatten());
    throw new Error(parsed.error.issues?.[0]?.message ?? 'Invalid input');
  }

  const res = await fetch(`${API_URL}/profile`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(parsed?.data),
  });
  if (!res.ok) throw new Error('Failed to update profile');
  return res.json();
};
