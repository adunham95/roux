import React from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export const DashboardCard = (props: IProps) => {
  const { title, description, children, className } = props;
  return (
    <div
      className={twMerge(
        'bg-surface px-6 py-6 rounded-md sm:rounded-xl mb-5',
        className,
      )}
    >
      <h3 className="mb-2 text-xl font-semibold leading-6 text-tc-1">
        {title}
      </h3>
      {description && <p className="mb-2 text-base text-tc-3">{description}</p>}
      {children}
    </div>
  );
};
