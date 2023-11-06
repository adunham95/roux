import React from 'react';

interface IProps {
  label: string;
  title: string;
  description: string;
}

export const MarkingHeader = (props: IProps) => {
  const { label, title, description } = props;
  return (
    <>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold leading-7 text-brand">
          {label}
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {title}
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
        {description}
      </p>
    </>
  );
};
