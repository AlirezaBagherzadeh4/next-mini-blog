import { fetchPosts } from '../shared/lib/api';
import { BlogCard } from '../components/local';

export default async function Posts() {
  const posts = await fetchPosts();
  return (
    <>
      <div className="grid h-full w-full grid-cols-3 gap-8 py-8">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
}
