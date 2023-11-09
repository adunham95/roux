import React from 'react';
import RecipeCardSmall from '../recipe-card/recipe-card-small';

interface IProps {
  title: string;
  description?: string;
  options: {
    key: string;
    imgSrc: string;
    imgAlt?: string;
    title: string;
    category: string;
  }[];
}

export const Section = (props: IProps) => {
  const { title, description, options = [] } = props;
  return (
    <div>
      <h3 className="mb-1 text-base font-semibold leading-6 text-gray-900">
        {title}
      </h3>
      {description && (
        <p className="mb-1 text-sm text-gray-500">{description}</p>
      )}
      <section className="flex gap-x-6 gap-y-10 overflow-x-scroll hide-scrollbars">
        {options.map((opt) => (
          <RecipeCardSmall
            key={opt.key}
            className="flex-1"
            imgSrc={opt.imgSrc}
            imgAlt={opt.imgAlt || opt.title}
            title={opt.title}
            category={opt.category}
          />
        ))}
      </section>
    </div>
  );
};
