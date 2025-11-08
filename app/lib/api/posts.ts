const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export const fetchPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export const fetchPostById = async (id: number) => {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch post ${id}`);
  return res.json();
};
