import React from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  title?: string;
  percentage: number;
  labels?: { title: string; visiblePercentage: number }[];
}

export const StatusBar = (props: IProps) => {
  const { title, percentage = 0, labels = [] } = props;
  return (
    <div>
      <h4 className="sr-only">Status</h4>
      {title && <p className="text-lg font-medium text-tc-1">{title}</p>}
      <div className="mt-6" aria-hidden="true">
        <div className="overflow-hidden rounded-full bg-surface">
          <div
            className="h-2 rounded-full bg-brand"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-tc-2 sm:flex justify-between">
          {labels.map((l, i, arr) => (
            <div
              key={l.title}
              className={twMerge(
                'w-full',
                l.visiblePercentage <= percentage && 'text-brand',
                i === arr.length - 1 ? 'text-right' : 'text-center',
                i === 0 && 'text-left',
              )}
            >
              {l.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
