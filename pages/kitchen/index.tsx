import { useGetMyRecipes } from '@/api/queries/getMyRecipes';
import { TwoColumnCard } from '@/components/Layouts/components/twoColumnCard';
import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import { AlertPanel } from '@/components/alertPanel/alertPanel';
import { Button } from '@/components/buttons/button';
import { Container } from '@/components/container';
import EditKitchen from '@/components/forms/editKitchen';
import TextInput from '@/components/inputs/text-input';
import { Loader } from '@/components/loader/loader';
import CardSmall from '@/components/ui/cardSmall';
import { IRecipe } from '@/types/recipe';
import {
  UserGroupIcon,
  TrophyIcon,
  UserCircleIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useEffect } from 'react';

const people = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jame Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
];

const badges = [
  {
    id: '123',
    name: 'Culinary Creater',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    color: '#FF2301',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
        />
      </svg>
    ),
  },
  {
    id: '126',
    name: 'Culinary Creater',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    color: '#DC9D00',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
        />
      </svg>
    ),
  },
  {
    id: '124',
    name: 'Culinary Creater',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
    color: '#6F4F28',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 6h.008v.008H6V6Z"
        />
      </svg>
    ),
  },
  {
    id: '125',
    name: 'Culinary Creater',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    color: '#EA899A',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 6h.008v.008H6V6Z"
        />
      </svg>
    ),
  },
];

const Kitchen = () => {
  const { data = [], isLoading, isError } = useGetMyRecipes();
  console.log({ recipes: data });

  useEffect(() => {
    if (isError) {
      console.warn('Error Loading my recipes');
    }
  }, [isError]);
  return (
    <DefaultLayout
      pageName="My Kitchen"
      hero={{
        title: 'My Kitchen',
        img: '/images/empty-kitchen.jpg',
        imgClassName: 'object-center',
      }}
    >
      <Container>
        <div className="mt-1 flex flex-wrap space-x-6">
          <a href="#team" className="mt-2 flex items-center text-sm text-tc-2">
            <UserGroupIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-tc-2"
              aria-hidden="true"
            />
            Team
          </a>
          <a
            href="#badges"
            className="mt-2 flex items-center text-sm text-tc-2"
          >
            <TrophyIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-tc-2"
              aria-hidden="true"
            />
            Badges
          </a>
        </div>
      </Container>
      <Container className="py-4">
        <div className="space-y-10 gap-y-1 divide-y divide-surface-1/10">
          <TwoColumnCard
            title="Recipes"
            subTitle="Update Your personal account information"
            childrenClassName="block"
          >
            {isLoading && <Loader />}
            {isError && (
              <AlertPanel
                style="danger"
                title="Error"
                subTitle="An unexpected error occurred while fetching your recipes. Please try again later."
                className="mb-1"
              />
            )}
            {data.length > 0 && (
              <>
                <ul
                  role="list"
                  className="grid gap-6 grid-template-auto grid-template-3"
                >
                  {data.map((recipe: IRecipe) => (
                    <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
                      <CardSmall title={recipe.name} full />
                    </Link>
                  ))}
                  {[...new Array(7)].map((_, i) => (
                    <div key={`placeholder-${i}`}></div>
                  ))}
                </ul>
              </>
            )}
            {/* TODO Add placeholder */}
            {data.length === 0 && !isLoading && <p>No Recipes</p>}
          </TwoColumnCard>
          <TwoColumnCard
            title="Kitchen team"
            subTitle="Update Your personal account information"
            childrenClassName="block"
          >
            <ul role="list" className="divide-y divide-tc-1">
              {people.map((person) => (
                <li
                  key={person.email}
                  className="flex justify-between gap-x-6 py-5"
                >
                  <div className="flex min-w-0 gap-x-4">
                    {/* <img
                  className=" bg-surface-1"
                  src={person.imageUrl}
                  alt=""
                /> */}
                    <UserCircleIcon className="text-tc-3 h-12 w-12 flex-none rounded-full" />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-tc-1">
                        {person.name}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-tc-2">
                        {person.email}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
              <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <PlusCircleIcon className="text-tc-3 h-12 w-12 flex-none rounded-full" />
                </div>
                <div className="flex min-w-0 flex-auto items-center">
                  <TextInput
                    inputWrapperClassName="mt-0 w-full"
                    className="w-full flex items-center"
                    id="addEmail"
                    value={''}
                    placeholder="steve@email.com"
                    onChange={() => {}}
                  />
                  <Button className="ml-2">Add</Button>
                </div>
              </li>
            </ul>
          </TwoColumnCard>
          <TwoColumnCard title="Badges" childrenClassName="block">
            <div className="mx-auto flow-root lg:mx-0 lg:max-w-none">
              {badges.map((badge, idx) => (
                <li
                  key={`${badge.id}-${idx}`}
                  className="flex items-center justify-start gap-x-6 py-5 group"
                >
                  <div>
                    <div
                      className=" aspect-square bg-brand-600 rounded p-2"
                      style={{ backgroundColor: badge.color }}
                    >
                      {badge.icon}
                    </div>
                  </div>
                  <div className="min-w-0 flex-grow">
                    <div className="flex items-start gap-x-3">
                      <p className="text-sm font-semibold leading-6 text-tc-1">
                        {badge.name}
                      </p>
                    </div>
                    <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-tc-2 ">
                      <p className="truncate">{badge.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-none items-center gap-x-4 justify-self-end">
                    <Button color="variable" variant="text" href="/">
                      View Recipe
                    </Button>
                  </div>
                </li>
              ))}
            </div>
          </TwoColumnCard>
          <TwoColumnCard title="Badges" childrenClassName="block">
            <EditKitchen />
          </TwoColumnCard>
        </div>
      </Container>
    </DefaultLayout>
  );
};

export default Kitchen;
