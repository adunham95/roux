import React from 'react';
import { twMerge } from 'tailwind-merge';
import CardSmall from '../ui/cardSmall';

interface IProps {
  className?: string;
  preCard?: {
    className?: string;
    title: string;
    onClick?: () => void;
  };
  options: {
    onClick?: () => void;
    key: string;
    imgSrc?: string;
    imgAlt?: string;
    title: string;
    category: string;
  }[];
}

export const Section = (props: IProps) => {
  const { options = [], className = '', preCard } = props;
  return (
    <section
      className={twMerge(
        'flex gap-x-6 gap-y-10 overflow-x-scroll hide-scrollbars',
        className,
      )}
    >
      {preCard && (
        <CardSmall
          title={preCard.title}
          imgBackground="bg-brand-300"
          onClick={preCard.onClick}
        />
      )}
      {options.map((opt) => (
        <CardSmall
          key={opt.key}
          imgSrc={opt.imgSrc}
          imgAlt={opt.imgAlt || opt.title}
          title={opt.title}
          subTitle={opt.category}
        />
      ))}
    </section>
  );
};
