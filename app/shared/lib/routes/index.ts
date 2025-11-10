export const routes = {
  home: () => '/',
  posts: (page: number) => `/posts?page=${page}`,
  post: (id: number) => `/posts/${id}`,
};
