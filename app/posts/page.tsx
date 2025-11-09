import { fetchPosts } from '../shared/lib/api';
import { BlogCard, Pagination } from '../components';
import { Layer } from '../views';

interface SearchParams {
  searchParams: {
    page?: string;
  };
}

export default async function Posts({ searchParams }: SearchParams) {
  const perPage = 6;
  const page = (await Number(searchParams.page)) || 1;

  const { data: posts, totalPages } = await fetchPosts(page, perPage);

  return (
    <Layer>
      <div className="flex h-fit w-full flex-col items-center justify-between py-8">
        <div className="grid h-full w-full grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))} 
        </div>

        <Pagination totalPages={totalPages} currentPage={page} />
      </div>
    </Layer>
  );
}
