import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { useGetMembershipTiers } from '@/api/queries/getMemebershipTiers';
import { twMerge } from 'tailwind-merge';
import { RadioGroup } from '@headlessui/react';
import { formatAsDollars } from '@/utils/formatCurrenty';

const frequencies = [
  { value: 'monthlyCost', label: 'Monthly', priceSuffix: '/month' },
  { value: 'yearlyCost', label: 'Annually', priceSuffix: '/year' },
];

const PricingSection = () => {
  const { data } = useGetMembershipTiers();
  const [frequency, setFrequency] = useState(frequencies[0]);

  console.log(data);

  if (!data) {
    return <></>;
  }
  return (
    <>
      <div className="mt-16 flex justify-center">
        <RadioGroup
          value={frequency}
          onChange={setFrequency}
          className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
        >
          <RadioGroup.Label className="sr-only">
            Payment frequency
          </RadioGroup.Label>
          {frequencies.map((option) => (
            <RadioGroup.Option
              key={option.value}
              value={option}
              className={({ checked }) =>
                twMerge(
                  checked ? 'bg-brand text-white' : 'text-gray-500',
                  'cursor-pointer rounded-full px-2.5 py-1',
                )
              }
            >
              <span>{option.label}</span>
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>
      <div className="mt-20 flow-root">
        <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
          {data.map((tier) => (
            <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
              <h3
                id={tier.id}
                className="text-base font-semibold leading-7 text-gray-900"
              >
                {tier.tierName}
              </h3>
              <p className="mt-6 flex items-baseline gap-x-1">
                {tier[frequency.value as 'yearlyCost' | 'monthlyCost'] > 0 ? (
                  <>
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {formatAsDollars(
                        tier[frequency.value as 'yearlyCost' | 'monthlyCost'],
                      )}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      {frequency.priceSuffix}
                    </span>
                  </>
                ) : (
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    Free
                  </span>
                )}
              </p>
              <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">
                {tier.tierDescription}
              </p>
              <ul
                role="list"
                className="mt-6 space-y-3 text-sm leading-6 text-gray-600"
              >
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="h-6 w-5 flex-none text-brand"
                    aria-hidden="true"
                  />
                  Up to {tier.maxRecipeCount} Recipes
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="h-6 w-5 flex-none text-brand"
                    aria-hidden="true"
                  />
                  {tier.maxTeamSize} Team Members
                </li>
                {tier?.features?.map((feature) => (
                  <li key={feature.title} className="flex gap-x-3">
                    <CheckCircleIcon
                      className="h-6 w-5 flex-none text-brand"
                      aria-hidden="true"
                    />
                    {feature.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PricingSection;
