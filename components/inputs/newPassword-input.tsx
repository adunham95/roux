import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import InputWrapper, { IDefaultInputWrapperProps } from './inputWrapper';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface ITextInputProps extends IDefaultInputWrapperProps {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  onChange: (text: string, name: string, e?: React.ChangeEvent) => void;
  inputClassName?: string;
  ariaDescription?: string;
  autoComplete?: string;
  uppercaseRequired?: boolean;
  lowercaseRequired?: boolean;
  numbersRequired?: boolean;
  length?: number;
}

const NewPasswordInput = (props: ITextInputProps) => {
  const {
    onChange,
    id,
    name,
    type = 'text',
    placeholder = '',
    hasError = false,
    inputClassName = '',
    ariaDescription,
    value,
    autoComplete,
    disabled,
    uppercaseRequired = false,
    lowercaseRequired = false,
    numbersRequired = false,
    length = 0,
  } = props;

  const [requirements, setRequirements] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasNumbers: false,
    longerThan: false,
  });

  useEffect(() => {
    setRequirements({
      hasUppercase: /[A-Z]/g.test(value) || false,
      hasLowercase: /[a-z]/g.test(value) || false,
      hasNumbers: /[0-9]/g.test(value) || false,
      longerThan: value.length > length,
    });
  }, [value]);

  return (
    <InputWrapper {...props}>
      <input
        type={type}
        name={id || name}
        id={id}
        value={value}
        autoComplete={autoComplete}
        disabled={disabled}
        className={twMerge(
          'block w-full rounded-md border-0 py-1.5 px-1 shadow-sm ring-1 ring-inset ring-surface-5 bg-surface placeholder:text-surface-3 text-surface-1 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6',
          hasError &&
            'ring-error/10 placeholder:text-error/50 focus:ring-error',
          inputClassName,
        )}
        placeholder={placeholder}
        aria-describedby={ariaDescription || name || id}
        onChange={(e) => onChange(e.target.value, name || id, e)}
      />
      <div className="grid grid-cols-2 text-sm gap-x-1 gap-y-1 text-surface-2">
        {uppercaseRequired && (
          <div className="flex items-center">
            <span className="pr-1">Uppercase Letters:</span>
            {requirements.hasUppercase ? (
              <CheckCircleIcon className="h-4 w-4 text-success" />
            ) : (
              <XMarkIcon className="h-4 w-4 text-error" />
            )}
          </div>
        )}
        {lowercaseRequired && (
          <div className="flex items-center">
            <span className="pr-1">Lowercase Letters:</span>{' '}
            {requirements.hasLowercase ? (
              <CheckCircleIcon className="h-4 w-4 text-success" />
            ) : (
              <XMarkIcon className="h-4 w-4 text-error" />
            )}
          </div>
        )}
        {numbersRequired && (
          <div className="flex items-center">
            <span className="pr-1">Numbers:</span>
            {requirements.hasNumbers ? (
              <CheckCircleIcon className="h-4 w-4 text-success" />
            ) : (
              <XMarkIcon className="h-4 w-4 text-error" />
            )}
          </div>
        )}
        {length > 0 && (
          <div className="flex items-center">
            <span className="pr-1">Longer Than {length}:</span>{' '}
            {requirements.longerThan ? (
              <CheckCircleIcon className="h-4 w-4 text-success" />
            ) : (
              <XMarkIcon className="h-4 w-4 text-error" />
            )}
          </div>
        )}
      </div>
    </InputWrapper>
  );
};

export default NewPasswordInput;
