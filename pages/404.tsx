import { AppHead } from '@/components/appHead';
import Image from 'next/image';
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <>
      <AppHead pageName="Page Not Found" />
      <main className="relative isolate min-h-full">
        <Image
          priority
          fill
          src="/images/cutting-board-2.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
        <div className="mx-auto max-w-7xl px-6 py-40 text-center sm:py-56 lg:px-8">
          <p className="text-2xl font-semibold leading-8 text-surface-2">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-surface-2 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-xl text-surface-1/70 sm:mt-6">
            You seem to missing an ingredient
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="rounded-md bg-brand px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
