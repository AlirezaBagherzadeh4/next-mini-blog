import type { IPost } from '@/app/shared/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export const fetchPosts = async (): Promise<IPost[]> => {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
};

export const fetchPostById = async (id: string): Promise<IPost> => {
  try {
    const res = await fetch(`${BASE_URL}/posts/${id}`);
    console?.log('ididididididididid ', id);
    console.log('resresresresres ', res);
    if (!res.ok) throw new Error('Failed to fetch posts');
    return res.json();
  } catch (err) {
    throw err;
  }
};
