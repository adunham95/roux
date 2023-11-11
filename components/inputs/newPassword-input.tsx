import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import InputWrapper, { IDefaultInputWrapperProps } from './inputWrapper';
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
          'block w-full rounded-md border-0 py-1.5 px-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6',
          hasError &&
            'ring-red-300 placeholder:text-red-300 focus:ring-red-500',
          inputClassName,
        )}
        placeholder={placeholder}
        aria-describedby={ariaDescription || name || id}
        onChange={(e) => onChange(e.target.value, name || id, e)}
      />
      <div className="grid grid-cols-2 text-sm gap-x-1 gap-y-1">
        {/* TODO convert to icons */}
        {uppercaseRequired && (
          <p>
            Uppercase Letters: {requirements.hasUppercase ? 'True' : 'False'}
          </p>
        )}
        {lowercaseRequired && (
          <p>
            Lowercase Letters: {requirements.hasLowercase ? 'True' : 'False'}
          </p>
        )}
        {numbersRequired && (
          <p>Numbers: {requirements.hasNumbers ? 'True' : 'False'}</p>
        )}
        {length > 0 && (
          <p>
            Longer Than {length}: {requirements.longerThan ? 'True' : 'False'}
          </p>
        )}
      </div>
    </InputWrapper>
  );
};

export default NewPasswordInput;
