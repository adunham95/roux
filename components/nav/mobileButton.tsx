import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface IProps {
  onClick: () => void;
  open: boolean;
}

export const MobileButton = (props: IProps) => {
  const { onClick, open } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-md p-2.5 text-tc-2"
    >
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
};
