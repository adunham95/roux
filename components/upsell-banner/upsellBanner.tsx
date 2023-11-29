import Link from 'next/link';
import React from 'react';

interface IProps {
  title: string;
  description: string;
  cta?: string;
  ctaHref?: string;
  type?: 'membership' | 'account';
}

export const UpSellBanner = (props: IProps) => {
  const { title, description, cta, ctaHref, type = 'account' } = props;
  function getStyle() {
    switch (type) {
      case 'membership':
        return {
          text: 'text-gold-700',
          hover: 'hover:text-gold-600',
          background: 'bg-gold-50',
        };

      default:
        return {
          text: 'text-royal-blue-700',
          hover: 'hover:text-royal-blue-600',
          background: 'bg-royal-blue-50',
        };
    }
  }
  return (
    <div className={`rounded-md p-4 ${getStyle().background}`}>
      <div className="flex">
        <div className="flex-1 flex flex-col md:flex-row md:justify-between">
          <p className={`text-sm ${getStyle().text}`}>
            <span className="block md:inline-block font-medium">{title}</span>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 md:inline h-0.5 w-0.5 fill-current hidden"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <span className="block md:inline-block ">{description}</span>
          </p>
          <p className="mt-3 text-sm md:ml-6 md:mt-0">
            {cta && ctaHref && (
              <Link
                href={ctaHref}
                className={`whitespace-nowrap font-medium ${getStyle().text} ${
                  getStyle().hover
                }`}
              >
                {cta}
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
