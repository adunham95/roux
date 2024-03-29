import React from 'react';
import { AppHead } from '../../appHead';
import NavBar from '../../navbar';
import Image from 'next/image';
import SmallFooter from '@/components/footer/smallFooter';
import { IBreadcrumbs } from '@/components/breadcrumbs/breadcrumbs';
import { twMerge } from 'tailwind-merge';

export interface IDefaultLayoutProps {
  pageName?: string;
  children: React.ReactNode;
  hideNav?: boolean;
  mainClass?: string;
  heroImg?: string;
  heroTitle?: string;
  heroSlot?: React.ReactNode;
  footerSlot?: React.ReactNode;
  crumbs?: IBreadcrumbs[];
  crumbsSlot?: React.ReactNode;
  removeFootingMargin?: boolean;
  hero?: {
    img: string;
    title?: string;
    imgClassName?: string;
  };
}

export const DefaultLayout = (props: IDefaultLayoutProps) => {
  return (
    <div>
      <AppHead pageName={props.pageName} />
      {!props.hideNav && (
        <NavBar crumbs={props.crumbs} breadcrumbSlot={props.crumbsSlot} />
      )}
      {props.heroImg && (
        <div className="relative mb-5 isolate overflow-hidden bg-surface-1 px-6 py-24 sm:py-32 lg:px-8">
          <Image
            src={props.heroImg}
            alt="Hero Image"
            fill
            className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 -z-10 h-full w-full object-cover object-top bg-surface-3 opacity-70"></div>
          {props.heroTitle && (
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {props.heroTitle}
              </h2>
            </div>
          )}
        </div>
      )}
      {props.hero && (
        <div className="relative mb-5 isolate overflow-hidden bg-surface-1 px-6 py-24 sm:py-32 lg:px-8">
          <Image
            src={props.hero.img}
            alt="Hero Image"
            fill
            className={twMerge(
              'absolute inset-0 -z-10 h-full w-full object-cover object-top',
              props.hero.imgClassName,
            )}
          />
          <div className="absolute inset-0 -z-10 h-full w-full object-cover object-top bg-surface-3 opacity-70"></div>
          {props.hero.title && (
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {props.hero.title}
              </h2>
            </div>
          )}
        </div>
      )}
      {props.heroSlot}
      <main className={`${props.mainClass} min-h-screen`}>
        <>{props.children}</>
      </main>
      {props.footerSlot}
      <SmallFooter removeMargin={props.removeFootingMargin} />
    </div>
  );
};
