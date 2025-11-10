import { WordSlicer } from '@/app/shared/utils';
import { notFound } from 'next/navigation';
import { BlogContent } from '@/app/components/local';
import { fetchPostById } from '@/app/shared/lib/api';
import { Layer } from '@/app/views';
import { Metadata } from 'next';

const DOMAIN_URL =
  process.env.NEXT_PUBLIC_DOMAIN_URL || 'http://localhost:3000';

interface IPostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: IPostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await fetchPostById(id);

  if (!post) return { title: 'post not found' };

  return {
    title: post.title,
    description: WordSlicer(post.body, 15),
    authors: { name: post.author },
    openGraph: {
      title: post.title,
      description: WordSlicer(post.body, 15),
      type: 'article',
      url: `${DOMAIN_URL}/posts/${id}`,
      images: [
        {
          url: post.image,
          width: 600,
          height: 400,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: WordSlicer(post.body, 15),
      images: post.image,
    },
  };
}

const PostDetailPage = async ({ params }: IPostPageProps) => {
  const { id } = await params;
  const post = await fetchPostById(id);

  if (!post) notFound();

  return (
    <>
      <Layer>
        <div className="h-full w-full py-8">
          <BlogContent {...post} />
        </div>
      </Layer>
    </>
  );
};

export default PostDetailPage;
