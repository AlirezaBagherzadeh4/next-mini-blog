'use client';

import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/5 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <Image
          src="/images/loading.png"
          alt="Loading..."
          width={96}
          height={96}
          className="animate-bounce"
          priority={true}
        />
        <p className="text-lg font-bold text-gray-700">Loading...</p>
      </div>
    </div>
  );
}
