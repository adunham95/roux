import React from 'react';
import RecipeCardSmall from '../recipe-card/recipe-card-small';

interface IProps {
  options: {
    key: string;
    imgSrc: string;
    imgAlt?: string;
    title: string;
    category: string;
  }[];
}

export const Section = (props: IProps) => {
  const { options = [] } = props;
  return (
    <section className="flex gap-x-6 gap-y-10 overflow-x-scroll hide-scrollbars">
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
