'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/app/shared/shadcn/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/app/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/components/ui/popover';
import { Label } from '../../ui/label';

export interface IDropdown {
  options: { id: number; label: string; value: string }[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  emptyText?: string;
  label?: string;
}

export const Dropdown: React.FC<IDropdown> = ({
  options,
  selected,
  onChange,
  placeholder,
  emptyText,
  label,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleSelect = React.useCallback(
    (value: string) => {
      const updatedSelected = selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value];
      onChange(updatedSelected);
    },
    [selected, onChange],
  );

  const selectedLabels = React.useMemo(() => {
    const labels = selected
      .map((value) => options.find((option) => option.value === value)?.label)
      .filter(Boolean);
    return labels.slice(0, 1).join(', ') + (labels.length > 1 ? ', ...' : '');
  }, [selected, options]);

  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      {label && <Label>{label}</Label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="full flex h-9 w-full flex-row items-center justify-between rounded-md border border-gray-200 px-3 py-1 shadow-sm">
            <span className="truncate text-sm">
              {selected.length > 0 ? selectedLabels : placeholder}
            </span>
            <ChevronsUpDown className="opacity-50" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search framework..." className="h-9" />
            <CommandList>
              <CommandEmpty>{emptyText}</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.id}
                    value={option.value}
                    onSelect={() => handleSelect(option.value)}
                  >
                    {option.label}
                    <Check
                      className={cn(
                        'ml-auto h-4 w-4',
                        selected.includes(option.value)
                          ? 'opacity-100'
                          : 'opacity-0',
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
