import { getRecipe } from '@/api/queries/getRecipe';
import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import { Button } from '@/components/buttons/button';
import { Container } from '@/components/container';
import { IRecipe } from '@/types/recipe';
import React from 'react';

const RecipeId = ({ recipe }: { recipe: IRecipe }) => {
  console.log(recipe);
  return (
    <DefaultLayout
      heroSlot={
        <Container>
          <div className="md:flex md:items-center md:justify-between py-4 border-b border-b-brand-variable">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-surface-1 sm:truncate sm:text-3xl sm:tracking-tight">
                {recipe.name}
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
        <ul role="list" className="space-y-3 pt-5">
          {recipe.instructions
            .sort((a, b) => a.order - b.order)
            .map((inst) => (
              <li
                key={inst.id}
                className="overflow-hidden bg-surface text-surface-1 px-4 py-4 shadow sm:rounded-md sm:px-6"
              >
                <div>
                  <span className=" text-xl">{inst.order + 1}.</span>{' '}
                  {inst.description}
                </div>
              </li>
            ))}
        </ul>
      </Container>
    </DefaultLayout>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getServerSideProps(context: any) {
  const id = context?.params?.id;
  const recipe = await getRecipe(id);

  if (!recipe) {
    return {
      notFound: true,
    };
  }

  return { props: { recipe } };
}

export default RecipeId;
