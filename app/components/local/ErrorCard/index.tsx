'use client';

import Image from 'next/image';
import { Button } from '../../global';
import { usePathname, useRouter } from 'next/navigation';

export interface IErrorCard {
  code: number;
}

export const ErrorCard: React.FC<IErrorCard> = ({ code }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex h-full w-full items-center justify-center bg-black!">
      <div className="flex h-fit w-fit flex-col items-center justify-center gap-4 py-8 text-white">
        <Image
          src={`https://http.dog/${code}.jpg`}
          alt={String(code)}
          width={600}
          height={400}
        />
        <Button
          variant="secondary"
          onClick={() => {
            code === 500 ? router.push(pathname) : router.push('/');
          }}
        >
          Try Again
        </Button>
      </div>
    </div>
  );
};
