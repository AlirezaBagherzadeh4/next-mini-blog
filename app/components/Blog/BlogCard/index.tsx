import type { IPost } from '@/app/shared/types';
import Link from 'next/link';
import { routes } from '@/app/shared/lib/routes';
import Image from 'next/image';

export const BlogCard: React.FC<IPost> = ({
  id,
  title,
  body,
  author,
  image,
}) => {
  return (
    <div className="flex h-full max-h-80 w-full max-w-64 flex-col items-center justify-center gap-4 rounded-lg border border-gray-200 p-4">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        loading="lazy"
        className="h-full max-h-10 w-full rounded-b-md object-cover"
      />
      <h2 className="text-right text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{body}</p>
      <p className="text-gray-400">By {author}</p>
      <div className="mt-4">
        <Link href={routes.blog(id)} className="text-blue-500 hover:underline">
          Read more
        </Link>
      </div>
    </div>
  );
};
