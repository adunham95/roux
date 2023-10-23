import React from 'react';
import { twMerge } from 'tailwind-merge';
import Accordion from '../accordian';

interface ISidecarProps {
  className?: string;
  title?: string;
  subTitle?: string;
  defaultOpen?: number;
}

const Sidecar = (props: ISidecarProps) => {
  const { className, title, subTitle } = props;
  return (
    <div className={twMerge('shadow-lg rounded-md bg-gray-100', className)}>
      {(title || subTitle) && (
        <div className="p-2">
          {title && (
            <h2 className="text-xl font-bold leading-7 tracking-tight text-gray-900">
              {title}
            </h2>
          )}
          {subTitle && (
            <p className="text-base leading-1 text-gray-600">{subTitle}</p>
          )}
        </div>
      )}
      <Accordion title="What is life?">
        <h1>Open</h1>
      </Accordion>
    </div>
  );
};

export default Sidecar;
