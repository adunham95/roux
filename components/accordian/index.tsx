import React, { useState } from 'react';

interface IAccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Accordion = (props: IAccordionProps) => {
  const { title, children, defaultOpen = false } = props;
  const [expanded, setExpanded] = useState(defaultOpen);
  return (
    <div className="px-2 pb-2">
      <dt>
        <button
          type="button"
          className="flex w-full items-start justify-between text-left text-gray-900"
          aria-controls="faq-0"
          aria-expanded="false"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="text-base font-semibold leading-7">{title}</span>
          <span className="ml-6 flex h-7 items-center">
            <svg
              className={`h-6 w-6 ${expanded ? 'hidden' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            <svg
              className={`h-6 w-6 ${expanded ? '' : 'hidden'}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </span>
        </button>
      </dt>
      {expanded && <dd className={'my-1 pr-6'}>{children}</dd>}
      <div className="w-full border-t border-gray-300"></div>
    </div>
  );
};

export default Accordion;
