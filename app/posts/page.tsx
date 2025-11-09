import { fetchPosts } from '../shared/lib/api';
import { BlogCard, Pagination } from '../components';
import { Layer } from '../views';
import { redirect } from 'next/navigation';

interface SearchParams {
  searchParams: {
    page?: string;
  };
}

export default async function Posts({ searchParams }: SearchParams) {
  const posts = await fetchPosts();
  const allPosts = posts || [];

  const perPage = 6;
  const page = (await Number(searchParams.page)) || 1;
  const totalPages = Math.ceil(allPosts.length / perPage);

  if (page > totalPages && totalPages > 0) redirect(`?page=${totalPages}`);

  const start = (page - 1) * perPage;
  const end = start + perPage;
  const currentPosts = allPosts.slice(start, end);

  return (
    <Layer>
      <div className="flex h-fit w-full flex-col items-center justify-between py-8">
        <div className="grid h-full w-full grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        {/* currentPage رو هم پاس بده */}
        <Pagination totalPages={totalPages} currentPage={page} />
      </div>
    </Layer>
  );
}
