import React from 'react';
import { AppHead } from '../appHead';
import NavBar from '../navbar';
import Image from 'next/image';

export interface IDefaultLayoutProps {
  pageName?: string;
  children: React.ReactNode;
  hideNav?: boolean;
  mainClass?: string;
  heroImg?: string;
  heroTitle?: string;
  heroSlot?: React.ReactNode;
}

export const DefaultLayout = (props: IDefaultLayoutProps) => {
  return (
    <div>
      <AppHead pageName={props.pageName} />
      {!props.hideNav && <NavBar />}
      {props.heroImg && (
        <div className="relative mb-5 isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
          <Image
            src={props.heroImg}
            alt="Hero Image"
            fill
            className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 -z-10 h-full w-full object-cover object-top bg-gray-500 opacity-70"></div>
          {props.heroTitle && (
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {props.heroTitle}
              </h2>
            </div>
          )}
        </div>
      )}
      {props.heroSlot}
      <main className={`${props.mainClass}`}>
        <>{props.children}</>
      </main>
    </div>
  );
};
