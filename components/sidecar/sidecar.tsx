import React, { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';
import Accordion from '../accordian';
import { Button } from '../buttons/button';

interface ISidecarElement {
  key: string;
  title: string;
  child: React.ReactNode;
  display?: 'accordion' | 'inline';
}
interface ISidecarProps {
  className?: string;
  title?: string;
  subTitle?: string;
  defaultOpen?: string;
  options: ISidecarElement[];
  cta?: string;
  ctaOnClick?: () => void;
}

const Sidecar = (props: ISidecarProps) => {
  const {
    className,
    title,
    subTitle,
    options,
    defaultOpen = '',
    cta,
    ctaOnClick,
  } = props;
  return (
    <div
      className={twMerge(
        'shadow-lg rounded-md bg-surface sticky top-2',
        className,
      )}
    >
      {(title || subTitle) && (
        <div className="p-2">
          {title && (
            <h2 className="text-xl font-bold leading-7 tracking-tight text-surface-">
              {title}
            </h2>
          )}
          {subTitle && (
            <p className="text-base leading-1 text-surface-2">{subTitle}</p>
          )}
        </div>
      )}
      <div className="divide-y divide-surface-5">
        {options.map((elm) => {
          switch (elm.display) {
            case 'accordion':
              return (
                <Accordion
                  key={elm.key}
                  title={elm.title}
                  defaultOpen={elm.key === defaultOpen}
                >
                  {elm.child}
                </Accordion>
              );
            default:
              return <Fragment key={elm.key}>{elm.child}</Fragment>;
          }
        })}
      </div>
      {cta && ctaOnClick && (
        <div className="p-1">
          <Button size="lg" className="w-full" onClick={ctaOnClick}>
            {cta}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Sidecar;
