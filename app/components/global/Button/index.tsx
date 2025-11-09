'use client';

import { useState, type ButtonHTMLAttributes } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

export const Button: React.FC<IButton> = ({
  variant = 'primary',
  loading = false,
  children,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      disabled={loading || props.disabled}
      className={`relative flex cursor-pointer items-center justify-center overflow-hidden rounded-md transition-transform duration-300 hover:scale-105 ${
        variant === 'primary'
          ? 'bg-black text-white'
          : 'border border-black bg-white text-black'
      } h-10 px-4 text-sm font-medium disabled:text-[#9b9898] disabled:opacity-50`}
      {...props}
    >
      <span className="invisible px-1 whitespace-nowrap">
        {loading ? 'Loading...' : children}
      </span>

      <span className="absolute inset-0 flex items-center justify-center">
        <span
          className={`absolute flex items-center justify-center whitespace-nowrap transition-all duration-300 ${
            hovered || loading
              ? '-translate-y-3 opacity-0'
              : 'translate-y-0 opacity-100'
          }`}
        >
          {loading ? 'Loading...' : children}
        </span>
        <span
          className={`absolute flex items-center justify-center whitespace-nowrap transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          Wooof!
        </span>
      </span>
    </button>
  );
};
