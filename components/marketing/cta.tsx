import Link from 'next/link';
import React from 'react';

interface IProps {
  title: string;
  subtitle?: string;
  description: string;
  ctaTitle?: string;
  ctaLink?: string;
  secondaryTitle?: string;
  secondaryLink?: string;
}

export const MarketingCallToAction = (props: IProps) => {
  const {
    title,
    subtitle,
    description,
    ctaLink,
    ctaTitle,
    secondaryLink,
    secondaryTitle,
  } = props;
  return (
    <div className="bg-brand">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
            {subtitle && (
              <>
                <br />
                {subtitle}
              </>
            )}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-200">
            {description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {ctaLink && ctaLink && (
              <Link
                href={ctaLink}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-brand-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {ctaTitle}
              </Link>
            )}
            {secondaryLink && secondaryTitle && (
              <Link
                href={secondaryLink}
                className="text-sm font-semibold leading-6 text-white"
              >
                {secondaryTitle}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
