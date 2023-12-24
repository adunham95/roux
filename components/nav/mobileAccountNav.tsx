import React, { useEffect } from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '../buttons/button';
import { useLogout } from '@/api/queries/logout';
import { useSession } from '@/context/session';

const userNavigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Your Profile', href: '/settings/my-profile' },
  { name: 'My Recipes', href: '/my-recipes' },
];

interface IMobileAccountNavProps {}

const MobileAccountNav = (props: IMobileAccountNavProps) => {
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
      <div className="pb-3 pt-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <UserCircleIcon className="h-10 w-10 text-surface-3" />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-surface-1">
              {session.user.firstName} {session.user.lastName}
            </div>
            <div className="text-sm font-medium text-surface-2">
              {session.user.email}
            </div>
          </div>
          <button
            type="button"
            className="relative ml-auto flex-shrink-0 rounded-full transparent p-1 text-surface-3 hover:text-surface-4 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 space-y-1">
          {userNavigation.map((item) => (
            <Link
              key={item.name}
              as="a"
              href={item.href}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-surface-3 hover:bg-surface-5"
            >
              {item.name}
            </Link>
          ))}
          <Button
            onClick={() => signOut()}
            variant="empty"
            className="w-full text-left -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-surface-3 hover:bg-surface-5"
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
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-surface-3 hover:bg-surface-5"
      >
        Log in
      </Link>
      <Link
        href="/sign-up"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-surface-3 hover:bg-surface-5"
      >
        Create Account
      </Link>
    </div>
  );
};

export default MobileAccountNav;
