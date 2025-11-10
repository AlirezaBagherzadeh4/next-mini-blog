'use client';

import {
  PaginationContent,
  Pagination,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationLink,
} from '../../ui/pagination';
import { routes } from '@/app/shared/lib/routes';

export interface IGPagination {
  className?: string;
  currentPage: number;
  totalPages: number;
}

export const GPagination: React.FC<IGPagination> = ({
  className,
  currentPage,
  totalPages,
}) => {
  return (
    <Pagination className={className}>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={routes.posts(currentPage - 1)} />
          </PaginationItem>
        )}
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={routes.posts(page)}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href={routes.posts(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
