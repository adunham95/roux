import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface IRecipeCardSmallProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  category: string;
  tags?: string[];
}

const RecipeCardSmall = (props: IRecipeCardSmallProps) => {
  const { imgSrc, imgAlt, title, category } = props;
  return (
    <div className="group relative">
      <div className="relative aspect-square w-full bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          className="object-cover overflow-hidden rounded"
        />
        <div className="absolute top-0 flex justify-end w-full p-2">
          <RecipeBadge className="bg-green-500" />
          <RecipeBadge className="bg-amber-500" />
          <RecipeBadge className="bg-blue-500" />
          <RecipeBadge />
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-base text-gray-700">
            <a href="#">{title}</a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{category}</p>
        </div>
      </div>
    </div>
  );
};

interface IRecipeBadgeProps {
  className?: string;
}

function RecipeBadge(props: IRecipeBadgeProps) {
  const { className = '' } = props;
  return (
    <div
      className={twMerge(
        'h-2 w-2 opacity-50 bg-gray-500 mr-1 mb-1 rounded-full z-10 group-hover:h-7 group-hover:w-7 group-hover:opacity-100 transition-all',
        className,
      )}
    ></div>
  );
}

export default RecipeCardSmall;
