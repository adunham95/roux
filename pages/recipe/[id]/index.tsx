import { getRecipe } from '@/api/queries/getRecipe';
import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import { Button } from '@/components/buttons/button';
import { Container } from '@/components/container';
import { IRecipe } from '@/types/recipe';
import { hasPermission } from '@/utils/authGate';
import { UserPermissions } from '@/utils/permissions';
import { useSession } from 'next-auth/react';
import React from 'react';

const RecipeId = ({ recipe }: { recipe: IRecipe }) => {
  const { data: session } = useSession();
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
              <Button className="ml-2" color="variable-accent">
                Cook
              </Button>
              <Button className="ml-2" color="variable">
                Fork
              </Button>
              {hasPermission(session, UserPermissions.EDIT_RECIPE) && (
                <Button
                  href={`/recipe/${recipe.id}/edit`}
                  className="ml-2"
                  color="variable"
                >
                  Edit
                </Button>
              )}
            </div>
          </div>
        </Container>
      }
    >
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-3 py-5 ">
        <div className="bg-surface text-surface-1 px-4 py-4 shadow sm:rounded-md sm:px-6">
          <h2 className="text-lg border-b border-b-brand-variable py-1 mb-2">
            Ingredients
          </h2>
          <ul role="list">
            {recipe.ingredients.map((ing) => (
              <li
                key={ing.refId}
                className="text-surface-1 flex justify-between pb-2"
              >
                <span>{ing.name}</span>
                <span>
                  {ing.count}
                  {ing.type}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className=" col-span-2">
          <h2 className="text-xl text-surface-1 pb-2">Instructions</h2>
          <ul role="list" className="space-y-3">
            {recipe.instructions
              .sort((a, b) => a.order - b.order)
              .map((inst) => (
                <li
                  key={inst.refId}
                  className="overflow-hidden bg-surface text-surface-1 px-4 py-4 shadow sm:rounded-md sm:px-6"
                >
                  <div>
                    <span className=" text-xl">{inst.order + 1}.</span>{' '}
                    {inst.description}
                  </div>
                </li>
              ))}
          </ul>
        </div>
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
