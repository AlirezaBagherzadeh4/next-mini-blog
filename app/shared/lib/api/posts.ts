import type { IPost } from '../../types/interface';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export const fetchPosts = async (
  page: number,
  limit: number,
): Promise<{ data: IPost[]; totalPages: number }> => {
  const res = await fetch(`${API_URL}/posts?_page=${page}&_limit=${limit}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch posts');

  const totalCount = Number(res.headers.get('X-Total-Count')) || 0;
  const totalPages = Math.ceil(totalCount / limit);
  const data = await res.json();

  return { data, totalPages };
};

export const fetchPostById = async (id: string): Promise<IPost> => {
  try {
    const res = await fetch(`${API_URL}/posts/${id}`);
    if (!res.ok) throw new Error('Failed to fetch posts');
    return res.json();
  } catch (err) {
    throw err;
  }
};
