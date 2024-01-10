import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Flyout({
  children,
  title,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-brand-variable">
        <span>{title}</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-0 z-10 mt-5 flex w-screen max-w-max px-4">
          <div className="w-screen max-w-sm flex-auto rounded-3xl bg-surface p-4 text-sm leading-6 shadow-lg ring-1 ring-surface-1/5">
            {/* {solutions.map((item) => (
              <div
                key={item.name}
                className="relative rounded-lg p-4 hover:bg-surface-4"
              >
                <a href={item.href} className="font-semibold text-surface-1">
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-surface-2">{item.description}</p>
              </div>
            ))} */}
            {children}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
