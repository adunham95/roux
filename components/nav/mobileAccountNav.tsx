import React from 'react';
import { BellIcon } from '@heroicons/react/24/outline';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '../buttons/button';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const userNavigation = [
  { name: 'Your Profile', href: '/settings/my-profile' },
  { name: 'Settings', href: '#' },
];

interface IMobileAccountNavProps {}

const MobileAccountNav = (props: IMobileAccountNavProps) => {
  const {} = props;
  const { status, data: session } = useSession();
  const isLoggedIn = status === 'authenticated';
  if (isLoggedIn && session) {
    return (
      <div className="pb-3 pt-4">
        <div className="flex items-center px-4">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={user.imageUrl}
              alt=""
            />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-gray-800">
              {session.user.firstName} {session.user.lastName}
            </div>
            <div className="text-sm font-medium text-gray-500">
              {session.user.email}
            </div>
          </div>
          <button
            type="button"
            className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 space-y-1 px-2">
          {userNavigation.map((item) => (
            <Link
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            >
              {item.name}
            </Link>
          ))}
          <Button
            onClick={() => signOut()}
            variant="empty"
            className="w-full text-left block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
          >
            Sign Out
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Link
        href="/login"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        Log in
      </Link>
      <a
        href="#"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        Create Account
      </a>
    </div>
  );
};

export default MobileAccountNav;
