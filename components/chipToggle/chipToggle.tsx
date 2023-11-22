import React from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  id: string;
  label: string;
  onChange?: (checked: boolean) => void;
  checked: boolean;
  disabled?: boolean;
}

export const ChipToggle = (props: IProps) => {
  const { id, label, onChange = () => null, checked, disabled = false } = props;
  return (
    <div
      className={twMerge(
        'inline-flex items-center rounded-full bg-brand-50 px-2 py-1 text-xs font-medium text-brand-600  border border-transparent hover:border-brand-600 mr-1 mb-1 whitespace-nowrap',
        checked && 'bg-brand-500 text-white',
      )}
    >
      <input
        id={id}
        className="sr-only"
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      ></input>
      <label htmlFor={id} className="font-medium  cursor-pointer">
        {label}
      </label>
    </div>
  );
};
