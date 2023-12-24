import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../buttons/button';
import {
  BellIcon,
  ChevronDownIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { useLogout } from '@/api/queries/logout';
import { useSession } from '@/context/session';

const userNavigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Your Profile', href: '/settings/my-profile' },
  { name: 'My Recipes', href: '/my-recipes' },
];

interface IProps {}

const AccountNav = (props: IProps) => {
  const {} = props;
  const { data: logoutRes, refetch: logOut } = useLogout();
  const { session, refreshSession } = useSession();

  useEffect(() => {
    if (logoutRes?.success) {
      refreshSession();
    }
  }, [logoutRes]);

  function signOut() {
    logOut();
  }

  if (session) {
    return (
      <>
        <button
          type="button"
          className="relative flex-shrink-0 rounded-full  p-1 text-surface-3 hover:text-surface-2 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        <div
          className="hidden lg:block lg:h-6 lg:w-px lg:bg-surface-4"
          aria-hidden="true"
        />

        {/* Profile dropdown */}
        <Menu as="div" className="relative ml-4 flex-shrink-0">
          <div>
            <Menu.Button className="relative flex rounded-full  focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 items-center p-1">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <UserCircleIcon className="h-8 w-8 text-surface-3" />

              <span className="hidden lg:flex lg:items-center">
                <span
                  className="ml-4 text-sm font-semibold leading-6 text-surface-1"
                  aria-hidden="true"
                >
                  {session.user.firstName} {session.user.lastName}
                </span>
                <ChevronDownIcon
                  className="ml-2 h-5 w-5 text-surface-4"
                  aria-hidden="true"
                />
              </span>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-surface py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={twMerge(
                        active ? 'bg-surface-5' : '',
                        'block px-4 py-2 text-sm text-surface-3',
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
              <Menu.Item>
                <button
                  onClick={signOut}
                  className="block px-4 py-2 text-sm text-surface-3 hover:bg-surface-5 w-full text-left"
                >
                  Sign Out
                </button>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </>
    );
  }
  return (
    <>
      <Button href="/login">Login</Button>
      <Button href="/sign-up" variant="outline" className="ml-1">
        Create Account
      </Button>
    </>
  );
};

export default AccountNav;
