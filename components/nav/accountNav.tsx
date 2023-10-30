import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../buttons/button';
import { BellIcon } from '@heroicons/react/24/outline';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

interface IProps {}

const AccountNav = (props: IProps) => {
  const {} = props;
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return (
      <>
        <button
          type="button"
          className="relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Profile dropdown */}
        <Menu as="div" className="relative ml-4 flex-shrink-0">
          <div>
            <Menu.Button className="relative flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src={user.imageUrl}
                alt=""
              />
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
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={twMerge(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </>
    );
  }
  return (
    <>
      <Button>Login</Button>
      <Button variant="outline" className="ml-1">
        Create Account
      </Button>
    </>
  );
};

export default AccountNav;
