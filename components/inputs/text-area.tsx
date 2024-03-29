import React from 'react';
import { twMerge } from 'tailwind-merge';
import InputWrapper, { IDefaultInputWrapperProps } from './inputWrapper';

interface ITextAreaProps extends IDefaultInputWrapperProps {
  placeholder?: string;
  value: string;
  onChange: (text: string, name: string, e: React.ChangeEvent) => void;
  inputClassName?: string;
  ariaDescription?: string;
  autoComplete?: string;
  rows?: number;
  resize?: boolean;
}

const TextArea = (props: ITextAreaProps) => {
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
    rows = 3,
    resize = false,
  } = props;
  return (
    <InputWrapper {...props}>
      <textarea
        name={id || name}
        style={{ resize: resize ? 'both' : 'none' }}
        id={id}
        rows={rows}
        value={value}
        autoComplete={autoComplete}
        className={twMerge(
          'block w-full rounded-md border-0 py-1.5 px-1 shadow-sm ring-1 ring-inset ring-surface-5 bg-surface placeholder:text-tc-3 text-tc-1 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 max-w-[100vw]',
          hasError &&
            'ring-error/10 placeholder:text-error/50 focus:ring-error',
          inputClassName,
        )}
        placeholder={placeholder}
        aria-describedby={ariaDescription || name || id}
        onChange={(e) => onChange(e.target.value, name || id, e)}
      />
    </InputWrapper>
  );
};

export default TextArea;
