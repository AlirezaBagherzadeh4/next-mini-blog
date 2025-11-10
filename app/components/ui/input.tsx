'use client';

import * as React from 'react';

import { cn } from '@/app/shared/shadcn/lib/utils';
import { AlertCircle } from 'lucide-react';

interface IInput extends React.ComponentProps<'input'> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, IInput>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="w-full max-w-sm space-y-2">
        <input
          type={type}
          className={cn(
            'border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <div className="text-destructive flex items-center gap-2 text-sm">
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
