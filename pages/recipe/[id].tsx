import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import { Button } from '@/components/buttons/button';
import { Container } from '@/components/container';
import React from 'react';

const RecipeId = () => {
  return (
    <DefaultLayout
      heroSlot={
        <Container>
          <div className="md:flex md:items-center md:justify-between py-4 border-b border-b-brand-variable">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-surface-1 sm:truncate sm:text-3xl sm:tracking-tight">
                Recipe name
              </h2>
            </div>
            <div className="mt-4 flex md:ml-4 md:mt-0">
              <Button color="variable">Edit</Button>
              <Button className="ml-2" color="variable">
                Cook
              </Button>
            </div>
          </div>
        </Container>
      }
    >
      <Container>
        <h1>Test</h1>
      </Container>
    </DefaultLayout>
  );
};

export async function getServerSideProps() {
  // // Fetch data from external API
  // const res = await fetch(`https://.../data`);
  // const data = await res.json();
  // // Pass data to the page via props
  // return { props: { data } };
}

export default RecipeId;
