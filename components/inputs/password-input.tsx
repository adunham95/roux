import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import InputWrapper, { IDefaultInputWrapperProps } from './inputWrapper';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import IconButton from '../buttons/iconButton';

interface ITextInputProps extends IDefaultInputWrapperProps {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  onChange: (text: string, name: string, e?: React.ChangeEvent) => void;
  inputClassName?: string;
  ariaDescription?: string;
  autoComplete?: string;
}

const PasswordInput = (props: ITextInputProps) => {
  const {
    onChange,
    id,
    name,
    placeholder = '',
    hasError = false,
    inputClassName = '',
    ariaDescription,
    value,
    autoComplete,
    disabled,
  } = props;
  const [isVisible, setIsVisible] = useState(false);

  return (
    <InputWrapper {...props}>
      <div className="relative mt-2 rounded-md shadow-sm flex ring-1 ring-inset focus:ring-inset focus:ring-primary focus:ring-2">
        <input
          type={isVisible ? 'text' : 'password'}
          name={id || name}
          id={id}
          value={value}
          autoComplete={autoComplete}
          disabled={disabled}
          className={twMerge(
            'z-0 block w-full rounded-l-md border-0 p-1.5 shadow-sm  ring-surface-5 bg-surface placeholder:text-surface-3 text-surface-1 focus:ring-2  sm:text-sm sm:leading-6',
            hasError &&
              'ring-error/10 placeholder:text-error/50 focus:ring-error',
            inputClassName,
          )}
          placeholder={placeholder}
          aria-describedby={ariaDescription || name || id}
          onChange={(e) => onChange(e.target.value, name || id, e)}
        />

        <IconButton
          color="transparent"
          className="flex items-center pr-3 bg-surface rounded-r-md rounded-l-none border-l-none"
          title={`${isVisible ? 'Hide' : 'Show'} password`}
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? (
            <EyeIcon className="h-5 w-5 text-surface-3" aria-hidden="true" />
          ) : (
            <EyeSlashIcon
              className="h-5 w-5 text-surface-3"
              aria-hidden="true"
            />
          )}
        </IconButton>
      </div>
    </InputWrapper>
  );
};

export default PasswordInput;
