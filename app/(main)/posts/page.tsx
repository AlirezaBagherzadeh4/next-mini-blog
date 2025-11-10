import { Metadata } from 'next';
import { fetchPosts } from '../../shared/lib/api';
import { BlogCard, Pagination } from '../../components';
import { Layer } from '../../views';

const DOMAIN_URL =
  process.env.NEXT_PUBLIC_DOMAIN_URL || 'http://localhost:3000';
const ITEMS_PER_PAGE = process.env.NEXT_PUBLIC_ITEMS_PER_PAGE || 6;

interface IPostsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({
  searchParams,
}: IPostsPageProps): Promise<Metadata> {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const { data: posts } = await fetchPosts(
    currentPage,
    ITEMS_PER_PAGE as number,
  );

  return {
    title: `DogFactory Blog ${currentPage}`,
    description:
      'Read the latest articles and tutorials on various DOG topics!',
    openGraph: {
      title: `DogFactory Blog - Page ${currentPage}`,
      description:
        'Read the latest articles and tutorials on various DOG topics!',
      type: 'website',
      url: `${DOMAIN_URL}/posts?page=${currentPage}`,
      images: posts?.length
        ? posts?.map((post) => ({
            url: post?.image,
            width: 600,
            height: 400,
            alt: post?.title,
          }))
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `DogFactory Blog - Page ${currentPage}`,
      description:
        'Read the latest articles and tutorials on various DOG topics!',
      images: posts?.length ? [posts?.[0]?.image] : [],
    },
  };
}

export default async function Posts({ searchParams }: IPostsPageProps) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const { data: posts, totalPages } = await fetchPosts(
    currentPage,
    ITEMS_PER_PAGE as number,
  );

  return (
    <Layer>
      <div className="flex h-fit w-full flex-col items-center justify-between py-8">
        <div className="grid h-full w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </Layer>
  );
}
