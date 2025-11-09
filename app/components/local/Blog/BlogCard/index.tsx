'use client';

import type { IPost } from '@/app/shared/types';
import Link from 'next/link';
import { routes } from '@/app/shared/lib/routes';
import Image from 'next/image';
import { WordSlicer } from '@/app/shared/utils';

export const BlogCard: React.FC<IPost> = ({
  id,
  title,
  body,
  author,
  image,
}) => {
  return (
    <Link
      href={routes.post(id)}
      target="_blank"
      className="group flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg border border-gray-200 transition-shadow duration-300 hover:shadow-sm"
    >
      <div className="h-full w-full overflow-hidden rounded-t-lg">
        <Image
          src={image}
          alt={title}
          width={800}
          height={640}
          loading="lazy"
          className="h-full w-full rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-4 pb-4">
        <div className="flex h-fit w-full flex-col items-center justify-between gap-1">
          <h2 className="text-left text-lg leading-7 font-bold">{title}</h2>
          <p className="w-full text-left text-sm text-gray-400">By {author}</p>
        </div>
        <p className="text-gray-600">{WordSlicer(body, 15)}</p>
        <span className="self-end text-base text-blue-500 group-hover:underline">
          Read more
        </span>
      </div>
    </Link>
  );
};
