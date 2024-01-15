import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export interface IBreadcrumbs {
  name: string;
  href: string;
  current?: boolean;
}

export default function Breadcrumbs({
  crumbs,
  slot = <></>,
}: {
  crumbs: IBreadcrumbs[];
  slot?: React.ReactNode;
}) {
  return (
    <nav
      className="flex-col md:flex-row flex py-2 border-t border-surface-4 bg-surface"
      aria-label="Breadcrumb"
    >
      <ol
        role="list"
        className="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8"
      >
        <li className="flex">
          <div className="flex items-center">
            <Link href="/dashboard" className="text-tc-3 hover:text-tc-1">
              <span>Dashboard</span>
            </Link>
          </div>
        </li>
        {crumbs.map((page) => (
          <li key={page.name} className="flex">
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-tc-3"
                aria-hidden="true"
              />
              <Link
                href={page.href}
                className={`ml-4 text-sm font-medium hover:text-tc-1 ${
                  page.current ? 'text-brand-variable' : 'text-tc-3 '
                }`}
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
      <div>{slot}</div>
    </nav>
  );
}
