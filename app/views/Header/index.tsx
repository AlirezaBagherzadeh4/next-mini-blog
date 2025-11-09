'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components';
import { usePathname } from 'next/navigation';

export const Header: React.FC = () => {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="fixed top-0 z-10 flex h-fit max-h-20 w-full items-center justify-center bg-black py-4 text-white">
      <div className="flex h-fit w-full max-w-5xl flex-row items-center justify-between gap-4 bg-inherit">
        <div className="flex h-max w-fit items-center justify-between gap-1">
          <Image src={'/images/logo.png'} alt="logo" width={40} height={40} />
          <h1 className="mt-2 -ml-2 text-center text-2xl font-bold">
            Dog Factory
          </h1>
        </div>
        <div className="flex h-max w-fit items-center justify-between gap-4">
          {links.map((item, key) => (
            <Link
              key={key}
              href={item.href}
              className={`hover:underline ${(pathname.includes('posts') && item?.href === '/') || pathname === item.href ? 'text-gray-300 underline' : 'text-white'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Button variant="secondary">Login</Button>
      </div>
    </header>
  );
};
