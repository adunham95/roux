import React from 'react';
import { twMerge } from 'tailwind-merge';
import InputWrapper, { IDefaultInputWrapperProps } from './inputWrapper';

interface IProps extends IDefaultInputWrapperProps {
  checked: boolean;
  onChange: (checked: boolean, name: string, e?: React.ChangeEvent) => void;
}

export const Toggle = (props: IProps) => {
  const { checked, onChange, id, name, label } = props;
  return (
    <InputWrapper {...props} label="">
      <div className="flex items-center">
        <button
          type="button"
          className={twMerge(
            checked ? 'bg-brand' : 'bg-surface-4',
            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2',
          )}
          role="switch"
          aria-checked="false"
          aria-labelledby="annual-billing-label"
          onClick={() => onChange(!checked, name || id)}
        >
          <span
            aria-hidden="true"
            className={twMerge(
              checked ? 'translate-x-5' : 'translate-x-0',
              ' pointer-events-none inline-block h-5 w-5 transform rounded-full bg-surface shadow ring-0 transition duration-200 ease-in-out',
            )}
          ></span>
        </button>
        <span className="ml-3 text-sm" id="annual-billing-label">
          <span className="font-medium text-surface-1">{label}</span>
        </span>
      </div>
    </InputWrapper>
  );
};
