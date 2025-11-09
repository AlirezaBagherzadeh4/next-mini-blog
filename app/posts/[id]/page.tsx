import { notFound } from 'next/navigation';
import { BlogContent } from '@/app/components/local';
import { fetchPostById } from '@/app/shared/lib/api';

interface IPostPageProps {
  params: Promise<{ id: string }>;
}

const PostDetailPage = async ({ params }: IPostPageProps) => {
  const { id } = await params;
  const post = await fetchPostById(id);

  if (!post) notFound();

  return (
    <>
      {/* <head>
        <title>{post.title}</title>
        <meta name="description" content={post.body.slice(0, 160)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.body.slice(0, 160)} />
      </head> */}
      <div className="h-full w-full py-8">
        <BlogContent {...post} />
      </div>
    </>
  );
};

export default PostDetailPage;
