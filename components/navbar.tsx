import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { MobileButton } from './nav/mobileButton';
import { useState } from 'react';
import { MobileNav } from './nav/mobileNav';
import Link from 'next/link';
import Breadcrumbs, { IBreadcrumbs } from './breadcrumbs/breadcrumbs';

const AccountNav = dynamic(() => import('./nav/accountNav'), {
  ssr: false,
});

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'New Recipe', href: '/recipe/new' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar({
  crumbs,
  breadcrumbSlot,
}: {
  crumbs?: IBreadcrumbs[];
  breadcrumbSlot?: React.ReactNode;
}) {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  function isCurrent(path: string) {
    return path === pathname;
  }

  return (
    <Disclosure as="header" className="bg-surface shadow">
      {() => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4  lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="relative z-10 flex px-2 lg:px-0">
                <Link
                  href="/"
                  className="flex flex-shrink-0 items-center max-w-[300px]"
                >
                  <img
                    className="h-[40px] w-auto"
                    src="/icon-wide.png"
                    alt="Kitchendry"
                  />
                </Link>
              </div>
              <div className="relative flex items-center lg:hidden">
                {/* Mobile menu button */}
                <MobileButton open={open} onClick={() => setOpen(!open)} />
              </div>
              <div className="hidden lg:relative lg:ml-4 lg:flex lg:items-center">
                <AccountNav />
              </div>
            </div>
            <nav
              className="hidden lg:flex lg:space-x-2 lg:pt-2 justify-center"
              aria-label="Global"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    isCurrent(item.href)
                      ? 'border-brand hover:bg-brand-50 text-surface-3'
                      : 'border-b-transparent text-surface-3 hover:bg-surface-5 hover:text-surface-3 hover:border-surface-3',
                    'inline-flex items-center border-b-2 px-3 py-2 font-medium rounded-t transition-colors',
                  )}
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            {crumbs && <Breadcrumbs crumbs={crumbs} slot={breadcrumbSlot} />}
          </div>

          <MobileNav
            open={open}
            onClose={() => setOpen(false)}
            navItems={navigation}
          />
        </>
      )}
    </Disclosure>
  );
}
