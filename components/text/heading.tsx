import React from 'react';
import { twMerge } from 'tailwind-merge';

const variants = {
  h1: '',
  h2: '',
  h3: '',
  h4: '',
  h5: '',
  h6: '',
};

interface HeadingProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}

const Heading = (props: HeadingProps) => {
  const { children, variant = 'h2', className } = props;
  switch (variant) {
    case 'h1':
      return (
        <h1
          className={twMerge('font-heading', variants[variant], className)}
          children={children}
        />
      );
    case 'h2':
      return (
        <h2
          className={twMerge('font-heading', variants[variant], className)}
          children={children}
        />
      );
    case 'h3':
      return (
        <h3
          className={twMerge('font-heading', variants[variant], className)}
          children={children}
        />
      );
    case 'h4':
      return (
        <h4
          className={twMerge('font-heading', variants[variant], className)}
          children={children}
        />
      );
    case 'h5':
      return (
        <h5
          className={twMerge('font-heading', variants[variant], className)}
          children={children}
        />
      );
    case 'h6':
      return (
        <h6
          className={twMerge('font-heading', variants[variant], className)}
          children={children}
        />
      );
  }
};

export default Heading;
