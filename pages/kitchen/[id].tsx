import { useGetMyRecipes } from '@/api/queries/getMyRecipes';
import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import { AlertPanel } from '@/components/alertPanel/alertPanel';
import { Container } from '@/components/container';
import { Loader } from '@/components/loader/loader';
import CardSmall from '@/components/ui/cardSmall';
import { IRecipe } from '@/types/recipe';
import Link from 'next/link';
import React, { useEffect } from 'react';

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
        className="w-full h-full"
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
        className="w-full h-full"
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
        className="w-full h-full"
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
        className="w-full h-full"
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

const KitchenById = () => {
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
        title: 'Johns Kitchen',
        img: '/images/empty-kitchen.jpg',
        imgClassName: 'object-center',
      }}
    >
      <Container>
        <div className="mt-1 flex flex-wrap space-x-6">
          {badges.map((badge) => (
            <span
              key={badge.id}
              className="p-1 border inline-flex items-center rounded-full  px-2 py-1 text-xs font-medium "
              style={{ borderColor: badge.color }}
            >
              <div className="w-[12px] aspect-square mr-1">{badge.icon}</div>
              <span>{badge.name}</span>
            </span>
          ))}
        </div>
      </Container>
      <Container className="py-5">
        <h2 className="text-2xl font-bold leading-7 text-tc-1 pb-3 sm:truncate sm:text-3xl sm:tracking-tight">
          Recipes
        </h2>
        {isLoading && <Loader />}
        {isError && (
          <AlertPanel
            style="danger"
            title="Error"
            subTitle="An unexpected error occurred while fetching your recipes. Please try again later."
          />
        )}
        {data.length > 0 && (
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
        )}
        {/* TODO Add placeholder */}
        {data.length === 0 && !isLoading && <p>No Recipes</p>}
      </Container>
    </DefaultLayout>
  );
};

export default KitchenById;
