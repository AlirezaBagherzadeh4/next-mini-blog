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
      className={`flex h-full max-h-12 w-fit items-center justify-center px-8 ${variant === 'primary' ? 'bg-black text-white' : 'bg-white text-black'} text-sm font-medium disabled:text-[#9b9898]! disabled:opacity-50!`}
      {...props}
    >
      {loading ? 'Loading...' : props.children}
    </button>
  );
};
