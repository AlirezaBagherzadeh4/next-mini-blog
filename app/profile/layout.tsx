import { House } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
import ProfileLoading from './loading';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full min-h-screen w-full items-center justify-between bg-inherit">
      <div className="flex h-full w-20 flex-col items-center justify-start bg-black py-5">
        <Link href="/">
          <House color="#ffffff" className="cursor-pointer" />
        </Link>
      </div>
      <div className="flex h-full w-full items-center justify-center bg-inherit">
        <div className="flex h-fit w-full max-w-lg items-center justify-center rounded-lg border border-black p-16">
          <Suspense fallback={<ProfileLoading />}>{children}</Suspense>
        </div>
      </div>
    </div>
  );
}
