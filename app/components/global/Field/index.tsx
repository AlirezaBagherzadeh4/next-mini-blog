'use client';

import { useFormContext } from 'react-hook-form';
import { Label } from '../../ui/label';
import { Input } from '../../ui/input';

export interface IField {
  className?: string;
  label?: string;
  name: string;
  type: React.HTMLInputTypeAttribute;
  disabled?: boolean;
  required?: boolean;
}

export const Field: React.FC<IField> = ({
  className,
  label,
  name,
  type,
  disabled,
  required,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={`${className ?? ''} grid w-full max-w-sm items-center gap-3`}
    >
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        error={errors?.[name]?.message as string}
        id={name}
        type={type}
        {...register(name)}
        disabled={disabled}
        required={required}
      />
    </div>
  );
};
