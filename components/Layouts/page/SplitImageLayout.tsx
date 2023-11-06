import React from 'react';
import { AppHead } from '@/components/appHead';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface ISplitImageLayoutProps {
  pageName?: string;
  children: React.ReactNode;
  containerClassName?: string;
}

const SplitImageLayout = (props: ISplitImageLayoutProps) => {
  return (
    <>
      <AppHead pageName={props.pageName} />
      <main className={twMerge('h-full', props.containerClassName)}>
        <div className="flex min-h-full flex-1">
          <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>{props.children}</div>
            </div>
          </div>
          <div className="relative hidden w-0 flex-1 lg:block">
            <Image
              priority
              fill
              className="absolute inset-0 h-full w-full object-cover object-bottom"
              src="/images/cooking.jpg"
              alt=""
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default SplitImageLayout;
