import React, { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import InputWrapper, { IDefaultInputWrapperProps } from './inputWrapper';
import { useSearchParams } from 'next/navigation';

interface ITextInputProps extends IDefaultInputWrapperProps {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  onChange: (text: string, name: string, e?: React.ChangeEvent) => void;
  inputClassName?: string;
  ariaDescription?: string;
  autoComplete?: string;
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
          'block w-full rounded-md border-0 py-1.5 px-1 shadow-sm ring-1 ring-inset ring-surface-5 bg-surface placeholder:text-surface-3 text-surface-1 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6',
          hasError &&
            'ring-red-300 placeholder:text-red-300 focus:ring-red-500',
          inputClassName,
        )}
        placeholder={placeholder}
        aria-describedby={ariaDescription || name || id}
        onChange={(e) => onChange(e.target.value, name || id, e)}
      />
    </InputWrapper>
  );
};

export default TextInput;
