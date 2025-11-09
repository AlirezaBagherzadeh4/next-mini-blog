'use client';

import type { ButtonHTMLAttributes } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

export const Button: React.FC<IButton> = ({
  variant = 'primary',
  loading = false,

  ...props
}) => {
  return (
    <button
      className={`flex h-full max-h-12 w-fit cursor-pointer items-center justify-center rounded-sm px-8 py-2 ${variant === 'primary' ? 'bg-black text-white' : 'bg-white text-black'} text-sm font-medium disabled:text-[#9b9898]! disabled:opacity-50!`}
      {...props}
    >
      {loading ? 'Loading...' : props.children}
    </button>
  );
};
