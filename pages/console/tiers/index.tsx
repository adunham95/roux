import { useGetMembershipTiers } from '@/api/queries/getMemebershipTiers';
import { AdminLayout } from '@/components/Layouts/page/AdminLayout';
import { Button } from '@/components/buttons/button';
import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const Tiers = () => {
  const { data: tiers } = useGetMembershipTiers();
  console.log(tiers);
  return (
    <AdminLayout pageName="Membership Tiers">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-tc-1 sm:truncate sm:text-3xl sm:tracking-tight">
            Back End Developer
          </h2>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <Button href="/console/tiers/new">+ Add New</Button>
        </div>
      </div>
      <ul role="list" className="divide-y divide-surface-4">
        {tiers?.map((tier) => (
          <li
            key={tier.id}
            className="flex items-center justify-between gap-x-6 py-5"
          >
            <div className="min-w-0">
              <div className="flex items-start gap-x-3">
                <p className="text-sm font-semibold leading-6 text-tc-1">
                  {tier.tierName}
                </p>
                <p
                  className={twMerge(
                    tier.visible
                      ? 'text-green-700 bg-green-50 ring-green-600/20'
                      : 'text-amber-700 bg-amber-50 ring-amber-600/20',
                    'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset',
                  )}
                >
                  Visible
                </p>
              </div>
              <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-tc-2">
                <p className="whitespace-nowrap">
                  Team Size {tier.maxTeamSize}
                </p>
                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <p className="truncate">Recipe Size {tier.maxRecipeCount}</p>
              </div>
            </div>
            <div className="flex flex-none items-center gap-x-4">
              <Link
                href={`/console/tiers/${tier.id}`}
                className="rounded-md bg-surface px-2.5 py-1.5 text-sm font-semibold text-tc-1 shadow-sm ring-1 ring-inset ring-surface-3 hover:bg-surface-5 sm:block"
              >
                Edit Tier<span className="sr-only">, {tier.tierName}</span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </AdminLayout>
  );
};

export default Tiers;
