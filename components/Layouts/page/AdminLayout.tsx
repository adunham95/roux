import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  HomeIcon,
  XMarkIcon,
  UserCircleIcon,
  UsersIcon,
  UserGroupIcon,
  ChartBarIcon,
  CircleStackIcon,
  FolderIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';
import { AppHead } from '@/components/appHead';
import { Container } from '@/components/container';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const AccountNav = dynamic(() => import('../../nav/accountNav'), {
  ssr: false,
});

const navigation = [
  { name: 'Dashboard', href: '/console', icon: HomeIcon },
  {
    name: 'Memberships',
    href: '/console/memberships',
    icon: UsersIcon,
  },
  {
    name: 'Teams',
    href: '/console/teams',
    icon: UserGroupIcon,
  },
  {
    name: 'Users',
    href: '/console/users',
    icon: UserCircleIcon,
  },
  {
    name: 'Collections',
    href: '/console/collections',
    icon: CircleStackIcon,
  },
  {
    name: 'Membership Tiers',
    href: '/console/tiers',
    icon: Squares2X2Icon,
  },
  {
    name: 'Challenges',
    href: '/console/challenges',
    icon: FolderIcon,
  },
  {
    name: 'Reports',
    href: '/console/reports',
    icon: ChartBarIcon,
  },
];

interface IProps {
  pageName?: string;
  children: React.ReactNode;
}

export const AdminLayout = (props: IProps) => {
  const { pageName, children } = props;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useRouter();

  function isCurrent(path: string) {
    return path === pathname;
  }
  return (
    <>
      <AppHead pageName={pageName} />
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-surface-1/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-tc-5"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-brand px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-[52px] w-auto"
                        src="/icon-wide-light.png"
                        alt="Kitchendry"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={twMerge(
                                    isCurrent(item.href)
                                      ? 'bg-brand-700 text-tc-5'
                                      : 'text-tc-5 hover:text-tc-5 hover:bg-brand-700',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                  )}
                                >
                                  <item.icon
                                    className={twMerge(
                                      isCurrent(item.href)
                                        ? 'text-tc-5'
                                        : 'text-brand-200 group-hover:text-tc-5',
                                      'h-6 w-6 shrink-0',
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-brand px-6 pb-4">
            <div className="flex py-3 shrink-0 items-center">
              <img
                className="h-[52px] w-auto"
                src="/icon-wide-light.png"
                alt="Kitchendry"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={twMerge(
                            isCurrent(item.href)
                              ? 'bg-brand-700 text-tc-5'
                              : 'text-brand-200 hover:text-tc-5 hover:bg-brand-700',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                          )}
                        >
                          <item.icon
                            className={twMerge(
                              isCurrent(item.href)
                                ? 'text-tc-5'
                                : 'text-brand-200 group-hover:text-tc-5',
                              'h-6 w-6 shrink-0',
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-surface-5 bg-surface px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-tc-2 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-surface-1/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="lg:hidden">
              <img
                className="h-10 w-auto"
                src="/icon_square.png"
                alt="Kitchendry"
              />
            </div>

            <div className="flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-6 items-center ">
              {/* Profile dropdown */}
              <AccountNav />
            </div>
          </div>

          <main className="py-6">
            <Container>{children}</Container>
          </main>
        </div>
      </div>
    </>
  );
};
