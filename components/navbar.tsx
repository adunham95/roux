import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { MobileButton } from './nav/mobileButton';
import { useState } from 'react';
import { MobileNav } from './nav/mobileNav';
import Link from 'next/link';

const AccountNav = dynamic(() => import('./nav/accountNav'), {
  ssr: false,
});

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'New Recipe', href: '/new-recipe' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  function isCurrent(path: string) {
    return path === pathname;
  }

  return (
    <Disclosure as="header" className="bg-surface shadow">
      {() => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="relative z-10 flex px-2 lg:px-0">
                <Link href="/" className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="/icon-wide.png"
                    alt="Your Company"
                  />
                </Link>
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <MobileButton open={open} onClick={() => setOpen(!open)} />
              </div>
              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                <AccountNav />
              </div>
            </div>
            <nav
              className="hidden lg:flex lg:space-x-2 lg:pt-2"
              aria-label="Global"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    isCurrent(item.href)
                      ? 'border-brand hover:bg-brand-50'
                      : 'border-b-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300',
                    'inline-flex items-center border-b-2 px-3 py-2 font-medium rounded-t',
                  )}
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </nav>
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
