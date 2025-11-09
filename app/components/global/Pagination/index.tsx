'use client';
import Link from 'next/link';

interface IPagination {
  totalPages: number;
  currentPage: number;
}

export const Pagination = ({ totalPages, currentPage }: IPagination) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      {currentPage > 1 && (
        <Link
          href={`?page=${currentPage - 1}`}
          scroll={false}
          className="rounded-md border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Prev
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`?page=${page}`}
          scroll={false}
          className={`rounded-md border px-3 py-1 text-sm font-medium ${
            page === currentPage
              ? 'border-black bg-black text-white'
              : 'border-gray-300 text-gray-700 hover:bg-gray-100'
          }`}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link
          href={`?page=${currentPage + 1}`}
          scroll={false}
          className="rounded-md border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Next
        </Link>
      )}
    </div>
  );
};
