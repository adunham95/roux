import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface IRecipeCardSmallProps {
  className?: string;
  imgSrc?: string;
  imgAlt?: string;
  title: string;
  subTitle?: string;
  minWidth?: number;
  full?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  imgBackground?: string;
}

const CardSmall = (props: IRecipeCardSmallProps) => {
  const {
    imgSrc,
    imgAlt,
    imgBackground = 'bg-surface-4',
    title,
    subTitle,
    className,
    minWidth = 150,
    full = false,
    onClick,
    children = <></>,
  } = props;

  const innerHTML = (addHover = false) => (
    <>
      <div
        className={`relative aspect-square w-full ${imgBackground} rounded lg:aspect-none ${
          addHover ? 'group-hover:opacity-75' : ''
        }`}
      >
        {imgSrc && imgAlt ? (
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            className="object-cover overflow-hidden rounded"
          />
        ) : (
          <div className="object-cover overflow-hidden w-full h-full">
            {children}
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-base text-tc-1">
            <a href="#">{title}</a>
          </h3>
          <p className="mt-1 text-sm text-tc-2">{subTitle}</p>
        </div>
      </div>
    </>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        style={full ? {} : { minWidth: minWidth, maxWidth: minWidth }}
        className={twMerge(`group relative w-full`, className)}
      >
        {innerHTML(true)}
      </button>
    );
  }

  return (
    <div
      style={full ? {} : { minWidth: minWidth, maxWidth: minWidth }}
      className={twMerge(`group relative w-full`, className)}
    >
      {innerHTML()}
    </div>
  );
};

export default CardSmall;
