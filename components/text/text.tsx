import React from 'react';
import { twMerge } from 'tailwind-merge';

const variants = {
  t1: '',
  t2: '',
  a1: 'font-accent',
};

interface HeadingProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}

const Text = (props: HeadingProps) => {
  const { children, variant = 't1', className } = props;

  return (
    <p
      className={twMerge('font-body', variants[variant], className)}
      children={children}
    />
  );
};

export default Text;
