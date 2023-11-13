import React from 'react';

interface IProps {}

export const PricingTable = (props: IProps) => {
  const {} = props;
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-surface-1 sm:text-5xl">
            Plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-surface-2">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
          quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
        </p>

        {/* <!-- xs to lg --> */}
        <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
          <section className="p-8">
            <h3
              id="tier-basic"
              className="text-sm font-semibold leading-6 text-surface-1"
            >
              Basic
            </h3>
            <p className="mt-2 flex items-baseline gap-x-1 text-surface-1">
              <span className="text-4xl font-bold">$9</span>
              <span className="text-sm font-semibold">/month</span>
            </p>
            <a
              href="#"
              aria-describedby="tier-basic"
              className="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
            >
              Buy plan
            </a>
            <ul
              role="list"
              className="mt-10 space-y-4 text-sm leading-6 text-surface-1"
            >
              <li>
                <ul role="list" className="space-y-4">
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> Integrations </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> Shared links </span>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="space-y-4">
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> Advanced analytics </span>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="space-y-4">
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> 24/7 online support </span>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <section className="p-8 rounded-xl bg-surface-3/5 ring-1 ring-inset ring-surface-4">
            <h3
              id="tier-essential"
              className="text-sm font-semibold leading-6 text-surface-1"
            >
              Essential
            </h3>
            <p className="mt-2 flex items-baseline gap-x-1 text-surface-1">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-sm font-semibold">/month</span>
            </p>
            <a
              href="#"
              aria-describedby="tier-essential"
              className="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-indigo-600 text-white hover:bg-indigo-500"
            >
              Buy plan
            </a>
            <ul
              role="list"
              className="mt-10 space-y-4 text-sm leading-6 text-surface-1"
            >
              <li>
                <ul role="list" className="space-y-4">
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> Integrations </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> Shared links </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> Importing and exporting </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Team members
                      <span className="text-sm leading-6 text-surface-2">
                        (Up to 20 users)
                      </span>
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="space-y-4">
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> Advanced analytics </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> Basic reports </span>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="space-y-4">
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> 24/7 online support </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> Quarterly product workshops </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> Priority phone support </span>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <section className="p-8">
            <h3
              id="tier-premium"
              className="text-sm font-semibold leading-6 text-surface-1"
            >
              Premium
            </h3>
            <p className="mt-2 flex items-baseline gap-x-1 text-surface-1">
              <span className="text-4xl font-bold">$59</span>
              <span className="text-sm font-semibold">/month</span>
            </p>
            <a
              href="#"
              aria-describedby="tier-premium"
              className="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
            >
              Buy plan
            </a>
            <ul
              role="list"
              className="mt-10 space-y-4 text-sm leading-6 text-surface-1"
            >
              <li>
                <ul role="list" className="space-y-4">
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> Integrations </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> Shared links </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> Importing and exporting </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Team members
                      <span className="text-sm leading-6 text-surface-2">
                        (Up to 50 users)
                      </span>
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="space-y-4">
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> Advanced analytics </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> Basic reports </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> Professional reports </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> Custom report builder </span>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="space-y-4">
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> 24/7 online support </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> Quarterly product workshops </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> Priority phone support </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span> 1:1 onboarding tour </span>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </div>

        {/* <!-- lg+ --> */}
        <div className="isolate mt-20 hidden lg:block">
          <div className="relative -mx-8">
            <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
              <div
                className="flex w-1/4 px-4"
                style={{ marginLeft: '50%' }}
                aria-hidden="true"
              >
                <div className="w-full rounded-t-xl border-x border-t border-surface-1/10 bg-surface-3/5"></div>
              </div>
            </div>
            <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead>
                <tr>
                  <td></td>
                  <th scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                    <div className="text-sm font-semibold leading-7 text-surface-1">
                      Basic
                    </div>
                  </th>
                  <th scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                    <div className="text-sm font-semibold leading-7 text-surface-1">
                      Essential
                    </div>
                  </th>
                  <th scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                    <div className="text-sm font-semibold leading-7 text-surface-1">
                      Premium
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="sr-only">Price</span>
                  </th>
                  <td className="px-6 pt-2 xl:px-8">
                    <div className="flex items-baseline gap-x-1 text-surface-1">
                      <span className="text-4xl font-bold">$9</span>
                      <span className="text-sm font-semibold leading-6">
                        /month
                      </span>
                    </div>
                    <a
                      href="#"
                      className="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
                    >
                      Buy plan
                    </a>
                  </td>
                  <td className="px-6 pt-2 xl:px-8">
                    <div className="flex items-baseline gap-x-1 text-surface-1">
                      <span className="text-4xl font-bold">$29</span>
                      <span className="text-sm font-semibold leading-6">
                        /month
                      </span>
                    </div>
                    <a
                      href="#"
                      className="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-indigo-600 text-white hover:bg-indigo-500"
                    >
                      Buy plan
                    </a>
                  </td>
                  <td className="px-6 pt-2 xl:px-8">
                    <div className="flex items-baseline gap-x-1 text-surface-1">
                      <span className="text-4xl font-bold">$59</span>
                      <span className="text-sm font-semibold leading-6">
                        /month
                      </span>
                    </div>
                    <a
                      href="#"
                      className="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
                    >
                      Buy plan
                    </a>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="colgroup"
                    colSpan={4}
                    className="pb-4 text-sm font-semibold leading-6 text-surface-1 pt-8"
                  >
                    Features
                    <div className="absolute inset-x-8 mt-4 h-px bg-surface-1/10"></div>
                  </th>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="py-4 text-sm font-normal leading-6 text-surface-1"
                  >
                    Integrations
                    <div className="absolute inset-x-8 mt-4 h-px bg-surface-1/5"></div>
                  </th>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Basic</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Essential</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Premium</span>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="py-4 text-sm font-normal leading-6 text-surface-1"
                  >
                    Shared links
                    <div className="absolute inset-x-8 mt-4 h-px bg-surface-1/5"></div>
                  </th>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Basic</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Essential</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Premium</span>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="py-4 text-sm font-normal leading-6 text-surface-1"
                  >
                    Importing and exporting
                    <div className="absolute inset-x-8 mt-4 h-px bg-surface-1/5"></div>
                  </th>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-surface-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Not included in Basic</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Essential</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Premium</span>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="py-4 text-sm font-normal leading-6 text-surface-1"
                  >
                    Team members
                    <div className="absolute inset-x-8 mt-4 h-px bg-surface-1/5"></div>
                  </th>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-surface-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Not included in Basic</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <div className="text-center text-sm leading-6 text-surface-2">
                      Up to 20 users
                    </div>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <div className="text-center text-sm leading-6 text-surface-2">
                      Up to 50 users
                    </div>
                  </td>
                </tr>

                <tr>
                  <th
                    scope="colgroup"
                    colSpan={4}
                    className="pb-4 text-sm font-semibold leading-6 text-surface-1 pt-16"
                  >
                    Reporting
                    <div className="absolute inset-x-8 mt-4 h-px bg-surface-1/10"></div>
                  </th>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="py-4 text-sm font-normal leading-6 text-surface-1"
                  >
                    Advanced analytics
                    <div className="absolute inset-x-8 mt-4 h-px bg-surface-1/5"></div>
                  </th>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Basic</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Essential</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Premium</span>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="py-4 text-sm font-normal leading-6 text-surface-1"
                  >
                    Basic reports
                    <div className="absolute inset-x-8 mt-4 h-px bg-surface-1/5"></div>
                  </th>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-surface-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Not included in Basic</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Essential</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Premium</span>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="py-4 text-sm font-normal leading-6 text-surface-1"
                  >
                    Professional reports
                    <div className="absolute inset-x-8 mt-4 h-px bg-surface-1/5"></div>
                  </th>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-surface-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Not included in Basic</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-surface-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Not included in Essential</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Premium</span>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="py-4 text-sm font-normal leading-6 text-surface-1"
                  >
                    Custom report builder
                    <div className="absolute inset-x-8 mt-4 h-px bg-surface-1/5"></div>
                  </th>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-surface-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Not included in Basic</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-surface-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Not included in Essential</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Premium</span>
                  </td>
                </tr>

                <tr>
                  <th
                    scope="colgroup"
                    colSpan={4}
                    className="pb-4 text-sm font-semibold leading-6 text-surface-1 pt-16"
                  >
                    Support
                    <div className="absolute inset-x-8 mt-4 h-px bg-surface-1/10"></div>
                  </th>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="py-4 text-sm font-normal leading-6 text-surface-1"
                  >
                    24/7 online support
                    <div className="absolute inset-x-8 mt-4 h-px bg-surface-1/5"></div>
                  </th>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Basic</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Essential</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Premium</span>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="py-4 text-sm font-normal leading-6 text-surface-1"
                  >
                    Quarterly product workshops
                    <div className="absolute inset-x-8 mt-4 h-px bg-surface-1/5"></div>
                  </th>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-surface-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Not included in Basic</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Essential</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Premium</span>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="py-4 text-sm font-normal leading-6 text-surface-1"
                  >
                    Priority phone support
                    <div className="absolute inset-x-8 mt-4 h-px bg-surface-1/5"></div>
                  </th>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-surface-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Not included in Basic</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Essential</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Premium</span>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="py-4 text-sm font-normal leading-6 text-surface-1"
                  >
                    1:1 onboarding tour
                    <div className="absolute inset-x-8 mt-4 h-px bg-surface-1/5"></div>
                  </th>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-surface-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Not included in Basic</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-surface-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Not included in Essential</span>
                  </td>
                  <td className="px-6 py-4 xl:px-8">
                    <svg
                      className="mx-auto h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Included in Premium</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
