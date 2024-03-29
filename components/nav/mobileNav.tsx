import dynamic from 'next/dynamic';
import React from 'react';

const MobileAccountNav = dynamic(() => import('../nav/mobileAccountNav'), {
  ssr: false,
});

interface IProps {
  open: boolean;
  navItems: { name: string; href: string }[];
  onClose: () => void;
}

export const MobileNav = (props: IProps) => {
  const { open, onClose, navItems } = props;
  return (
    <div
      className={`lg:hidden ${open ? 'block' : 'hidden'}`}
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 z-10"></div>
      <div className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-surface px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-surface-1/10">
        <div className="flex justify-between gap-x-6">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Kitchendry</span>
            <img className="h-8 w-auto" src="/icon-wide.png" alt="" />
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-tc-3"
            onClick={onClose}
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-surface-3/10">
            <div className="space-y-2 py-6">
              {navItems.map((nav) => (
                <a
                  key={nav.href}
                  href={nav.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-tc-3 hover:bg-surface-5"
                >
                  {nav.name}
                </a>
              ))}
            </div>
            <div className="py-6">
              <MobileAccountNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
