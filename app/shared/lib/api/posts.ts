import { notFound } from 'next/navigation';
import type { IPost } from '../../types/interface';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export const fetchPosts = async (
  limit: number,
  page = 1,
): Promise<{ data: IPost[]; totalPages: number }> => {
  const res = await fetch(`${API_URL}/posts`);
  if (!res.ok) throw new Error('Failed to fetch posts');

  const data = await res.json();
  const totalPages = Math.ceil(data.length / limit);

  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedData = data.slice(start, end);

  return { data: paginatedData, totalPages };
};
export const fetchPostById = async (id: string): Promise<IPost> => {
  try {
    const res = await fetch(`${API_URL}/posts/${id}`, {
      next: {
        revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME) ?? 120,
      },
    });
    if (!res.ok) notFound();
    return res.json();
  } catch (err) {
    throw err;
  }
};
