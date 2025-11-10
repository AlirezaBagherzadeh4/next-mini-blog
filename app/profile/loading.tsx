import { Skeleton } from '../components/ui/skeleton';

export default function ProfileLoading() {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-between gap-8 text-black">
      <div className="flex h-fit w-full items-center justify-between gap-4">
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
      </div>
      <div className="flex h-fit w-full items-center justify-between gap-4">
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
      </div>
      <div className="flex h-fit w-full items-center justify-between gap-4">
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
      </div>
      <div className="self-start">
        <Skeleton className="h-9 w-[90px]" />
      </div>
    </div>
  );
}
