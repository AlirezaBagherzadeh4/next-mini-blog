'use client';

import type { IPost } from '@/app/shared/types';
import Image from 'next/image';

export const BlogContent: React.FC<IPost> = ({
  title,
  body,
  author,
  image,
}) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between gap-4">
      <div className="flex h-full max-h-80 w-full items-center justify-center overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex h-fit w-full flex-col items-start justify-between gap-1">
        <h1 className="w-full text-left text-2xl font-bold">{title}</h1>
        <p className="w-full text-left text-gray-400">By {author}</p>
      </div>
      <p className="mt-2 w-full text-left">{body}</p>
    </div>
  );
};
