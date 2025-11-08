import type { IPost } from "@/app/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export const fetchPosts = async (): Promise<IPost[]> => {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export const fetchPostById = async (id: number): Promise<IPost> => {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch post ${id}`);
  return res.json();
};
