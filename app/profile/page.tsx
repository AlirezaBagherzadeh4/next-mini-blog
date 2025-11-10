import { notFound } from 'next/navigation';
import { ProfileForm } from '../components';
import { fetchProfile } from '../shared/lib/api';

export default async function ProfilePage() {
  const profile = await fetchProfile();

  if (!profile) notFound();

  return <ProfileForm {...profile} />;
}
