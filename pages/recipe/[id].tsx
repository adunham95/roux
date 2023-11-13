import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import { ActivityFeed } from '@/components/activityFeed/activityFeed';
import { Container } from '@/components/container';
import React from 'react';

const RecipeId = () => {
  return (
    <DefaultLayout
      heroSlot={
        <Container>
          <div className="md:flex md:items-center md:justify-between py-4">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-surface-1 sm:truncate sm:text-3xl sm:tracking-tight">
                Recipe name
              </h2>
            </div>
            <div className="mt-4 flex md:ml-4 md:mt-0">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-surface px-3 py-2 text-sm font-semibold text-surface-1 shadow-sm ring-1 ring-inset ring-surface-4 hover:bg-surface-5"
              >
                Edit
              </button>
              <button
                type="button"
                className="ml-3 inline-flex items-center rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                Publish
              </button>
            </div>
          </div>
        </Container>
      }
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <ActivityFeed />
      </div>
    </DefaultLayout>
  );
};

export default RecipeId;
