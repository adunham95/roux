import React from 'react';
import RecipeCardSmall from '../recipe-card/recipe-card-small';
import { twMerge } from 'tailwind-merge';

interface IProps {
  className?: string;
  preCard?: {
    className?: string;
    title: string;
    onClick?: () => void;
  };
  options: {
    key: string;
    imgSrc: string;
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
        <button className="min-w-[150px] flex flex-col justify-start w-full">
          <div className="relative aspect-square w-full bg-brand-300 rounded lg:aspect-none group-hover:opacity-75">
            <div className="object-cover overflow-hidden w-full h-full"></div>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-base text-tc-1">
                <a href="#">{preCard.title}</a>
              </h3>
              {/* <p className="mt-1 text-sm text-tc-2">{category}</p> */}
            </div>
          </div>
        </button>
      )}
      {options.map((opt) => (
        <RecipeCardSmall
          key={opt.key}
          imgSrc={opt.imgSrc}
          imgAlt={opt.imgAlt || opt.title}
          title={opt.title}
          category={opt.category}
        />
      ))}
    </section>
  );
};
