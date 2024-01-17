import React from 'react';
import {
  BellIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/20/solid';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';

interface IProps {
  title: string;
  subTitle?: string;
  list?: string[];
  style?: 'danger' | 'success' | 'warning' | 'info';
}

export const AlertPanel = (props: IProps) => {
  const { style, title, subTitle, list = [] } = props;

  function getIcon() {
    switch (style) {
      case 'danger':
        return (
          <ExclamationCircleIcon
            className="h-6 w-6 text-error"
            aria-hidden="true"
          />
        );
      case 'warning':
        return (
          <ExclamationTriangleIcon
            className="h-6 w-6 text-warning"
            aria-hidden="true"
          />
        );
      case 'success':
        return (
          <CheckCircleIcon
            className="h-6 w-6 text-success"
            aria-hidden="true"
          />
        );

      default:
        return <BellIcon className="h-6 w-6 text-info" aria-hidden="true" />;
    }
  }

  function getStyle() {
    switch (style) {
      case 'danger':
        return 'text-error bg-surface-error';
      case 'warning':
        return 'text-warning bg-surface-warning';
      case 'success':
        return 'text-success bg-surface-success';
      default:
        return 'text-info bg-surface-info';
    }
  }

  return (
    <div className={twMerge('rounded-md p-4 my-1', getStyle())}>
      <div className="flex">
        <div className="flex-shrink-0">{getIcon()}</div>
        <div className="ml-3">
          <h3 className="text-sm font-medium">{title}</h3>
          <div className="mt-2 text-sm">
            <p>{subTitle}</p>
          </div>
          <div className="mt-2 text-sm">
            <ul role="list" className="list-disc space-y-1 pl-5">
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
