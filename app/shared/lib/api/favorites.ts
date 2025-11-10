import { IFavorite } from '../../types/interface';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';

export const fetchFavorites = async (): Promise<IFavorite[]> => {
  const res = await fetch(`${API_URL}/favorites`, {
    next: {
      revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME) ?? 120,
    },
  });
  if (!res.ok) throw new Error('Failed to fetch favorites');
  return res.json();
};
