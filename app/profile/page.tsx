import { notFound } from 'next/navigation';
import { ProfileForm } from '../components';
import { fetchProfile, fetchFavorites } from '../shared/lib/api';

export default async function ProfilePage() {
  const profile = await fetchProfile();
  const favorites = await fetchFavorites();

  if (!profile) notFound();

  return <ProfileForm profile={profile} favorites={favorites} />;
}
