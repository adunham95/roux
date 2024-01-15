import React, { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import InputWrapper, { IDefaultInputWrapperProps } from './inputWrapper';
import { useSearchParams } from 'next/navigation';

interface ITextInputProps extends IDefaultInputWrapperProps {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value: string | number;
  onChange: (text: string, name: string, e?: React.ChangeEvent) => void;
  inputClassName?: string;
  ariaDescription?: string;
  autoComplete?: string;
  min?: number;
  max?: number;
}

const TextInput = (props: ITextInputProps) => {
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
    min,
    max,
  } = props;
  const searchParams = useSearchParams();
  const queryValue = searchParams.get(id);
  useEffect(() => {
    if (queryValue) {
      onChange(queryValue, name || id);
    }
  }, [queryValue]);

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
          'block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-surface-5 bg-surface placeholder:text-tc-3 text-tc-1 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6',
          hasError &&
            'ring-error/10 placeholder:text-error/50 focus:ring-error',
          inputClassName,
        )}
        placeholder={placeholder}
        aria-describedby={ariaDescription || name || id}
        onChange={(e) => onChange(e.target.value, name || id, e)}
        min={min}
        max={max}
      />
    </InputWrapper>
  );
};

export default TextInput;
