import React from 'react';
import InputWrapper, { IDefaultInputWrapperProps } from './inputWrapper';
import { RgbStringColorPicker } from 'react-colorful';
import { twMerge } from 'tailwind-merge';

interface IProps extends IDefaultInputWrapperProps {
  value: string;
  onChange: (text: string, name: string) => void;
  inputClassName?: string;
  ariaDescription?: string;
}

export const ColorInput = (props: IProps) => {
  const {
    value = '0,0,0',
    onChange,
    name,
    id,
    inputClassName,
    ariaDescription,
    hasError,
  } = props;
  return (
    <InputWrapper {...props}>
      <style>{`.react-colorful{width: 100%}`}</style>
      <RgbStringColorPicker
        color={value}
        onChange={(c) => onChange(c, name || id)}
      />
      <input
        type={'string'}
        name={id || name}
        id={id}
        value={value}
        className={twMerge(
          'block w-full rounded-md border-0 mt-2 p-1.5 shadow-sm ring-1 ring-inset ring-surface-5 bg-surface placeholder:text-surface-3 text-surface-1 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6',
          hasError &&
            'ring-error/10 placeholder:text-error/50 focus:ring-error',
          inputClassName,
        )}
        aria-describedby={ariaDescription || name || id}
        onChange={(e) => onChange(e.target.value, name || id)}
      />
    </InputWrapper>
  );
};
