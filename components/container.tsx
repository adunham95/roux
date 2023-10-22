import React from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = (props: IProps) => {
  return (
    <div
      className={twMerge(
        `container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};
