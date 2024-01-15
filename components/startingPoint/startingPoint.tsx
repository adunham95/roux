import Link from 'next/link';
import React from 'react';

interface IProps {
  title: string;
  description?: string;
  items: {
    title: string;
    description: string;
    icon: React.ForwardRefExoticComponent<
      Omit<React.SVGProps<SVGSVGElement>, 'ref'>
    >;
    color: string;
    href: string;
  }[];
}

export const StartingPoint = (props: IProps) => {
  const { title, description, items } = props;
  return (
    <div className="@container">
      <h2 className="text-base font-semibold leading-6 text-tc-1">{title}</h2>
      {description && <p className="mt-1 text-sm text-tc-2">{description}</p>}
      <ul
        role="list"
        className="mt-6 grid grid-cols-1 gap-6 border-b border-t border-surface-4 py-6 @sm:grid-cols-2"
      >
        {items.map((item, itemIdx) => (
          <li key={itemIdx} className="flow-root">
            <Link
              href={item.href}
              className="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-brand-500 hover:bg-surface-2"
            >
              <div
                style={{ backgroundColor: item.color || '#649dad' }}
                className={
                  'flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg'
                }
              >
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-tc-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <span>{item.title}</span>
                  <span aria-hidden="true"> &rarr;</span>
                </h3>
                <p className="mt-1 text-sm text-tc-2">{item.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
