import React, { useState } from 'react';
import { MobileNav } from '../nav/mobileNav';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MobileButton } from '../nav/mobileButton';
import dynamic from 'next/dynamic';

const AccountNav = dynamic(() => import('../nav/accountNav'), {
  ssr: false,
});

const navigation: { name: string; href: string }[] = [
  // { name: 'Product', href: '/dashboard' },
  // { name: 'About', href: '/about' },
  // { name: 'Pricing', href: '/pricing' },
];

export const MarketingNavBar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  function isCurrent(path: string) {
    return path === pathname;
  }

  return (
    <header className="bg-surface">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Kitchendry</span>
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
                  : 'text-surface-1 hover:text-surface-2',
                'text-sm font-semibold leading-6 ',
              )}
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <div className="flex-1 items-center justify-end  hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
          <AccountNav />
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
