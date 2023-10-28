import React, { useState } from 'react';
import { MobileNav } from '../nav/mobileNav';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MobileButton } from '../nav/mobileButton';

const navigation = [
  { name: 'Product', href: '/product' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
];

export const MarketingNavBar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();
  //   const isLoggedIn = false;

  function isCurrent(path: string) {
    console.log({ path, pathname });
    return path === pathname;
  }

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Roux</span>
            <img className="h-8 w-auto" src="/icon-wide.png" alt="" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((nav) => (
            <Link
              key={nav.name}
              href={nav.href}
              className={twMerge(
                isCurrent(nav.href)
                  ? 'text-brand hover:text-brand-500'
                  : 'text-gray-900 hover:text-gray-600',
                'text-sm font-semibold leading-6 ',
              )}
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <a
            href="#"
            className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
          >
            Log in
          </a>
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </a>
        </div>
        <div className="flex lg:hidden">
          <MobileButton open={open} onClick={() => setOpen(!open)} />
        </div>
      </nav>
      <MobileNav
        open={open}
        onClose={() => setOpen(false)}
        navItems={navigation}
      />
    </header>
  );
};
