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
            'z-0 block w-full rounded-l-md border-0 py-1.5 px-1 shadow-sm  ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6',
            hasError &&
              'ring-red-300 placeholder:text-red-300 focus:ring-red-500',
            inputClassName,
          )}
          placeholder={placeholder}
          aria-describedby={ariaDescription || name || id}
          onChange={(e) => onChange(e.target.value, name || id, e)}
        />

        <IconButton
          color="transparent"
          className="flex items-center pr-3 bg-white rounded-r-md rounded-l-none border-l-none"
          title={`${isVisible ? 'Hide' : 'Show'} password`}
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? (
            <EyeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          ) : (
            <EyeSlashIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          )}
        </IconButton>
      </div>
    </InputWrapper>
  );
};

export default PasswordInput;