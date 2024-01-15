import Image from 'next/image';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Popover } from 'react-tiny-popover';

interface IRecipeCardSmallProps {
  className?: string;
  imgSrc?: string;
  imgAlt?: string;
  title: string;
  category?: string;
  tags?: string[];
  minWidth?: number;
  full?: boolean;
}

const RecipeCardSmall = (props: IRecipeCardSmallProps) => {
  const {
    imgSrc,
    imgAlt,
    title,
    category,
    className,
    minWidth = 150,
    full = false,
  } = props;
  return (
    <div
      style={full ? {} : { minWidth: minWidth, maxWidth: minWidth }}
      className={twMerge(`group relative w-full`, className)}
    >
      <div className="relative aspect-square w-full bg-surface-4 rounded lg:aspect-none group-hover:opacity-75">
        {imgSrc && imgAlt ? (
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            className="object-cover overflow-hidden rounded"
          />
        ) : (
          <div className="object-cover overflow-hidden w-full h-full"></div>
        )}
        <div className="absolute top-0 flex justify-end w-full p-2">
          {/* <RecipeBadge className="bg-green-500" />
          <RecipeBadge className="bg-amber-500" />
          <RecipeBadge className="bg-blue-500" title="Original" />
          <RecipeBadge title="Remixed x22" /> */}
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-base text-tc-1">
            <a href="#">{title}</a>
          </h3>
          <p className="mt-1 text-sm text-tc-2">{category}</p>
        </div>
      </div>
    </div>
  );
};

interface IRecipeBadgeProps {
  className?: string;
  title?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function RecipeBadge(props: IRecipeBadgeProps) {
  const { className = '', title } = props;
  const defaultClass =
    'h-2 w-2 opacity-50 bg-surface-2 mr-1 mb-1 rounded-full z-10 group-hover:h-5 group-hover:w-5 group-hover:opacity-100 transition-all';
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  if (title) {
    return (
      <Popover
        isOpen={isPopoverOpen}
        positions={['bottom', 'right', 'left', 'top']}
        padding={2}
        content={
          <div className="p-1 bg-surface-3 text-white rounded text-sm">
            {title}
          </div>
        }
      >
        <div
          onMouseEnter={() => setPopoverOpen(true)}
          onMouseLeave={() => setPopoverOpen(false)}
          className={twMerge(defaultClass, className)}
        ></div>
      </Popover>
    );
  }
  return <div className={twMerge(defaultClass, className)}></div>;
}

export default RecipeCardSmall;
