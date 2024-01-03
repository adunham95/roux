import { getRecipe } from '@/api/queries/getRecipe';
import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import { Button } from '@/components/buttons/button';
import { Container } from '@/components/container';
import { Card } from '@/components/ui/card';
import { IRecipe } from '@/types/recipe';
import { hasPermission } from '@/utils/authGate';
import { UserPermissions } from '@/utils/permissions';
import { useSession } from 'next-auth/react';
import React from 'react';

const RecipeId = ({ recipe }: { recipe: IRecipe }) => {
  console.log(recipe);
  const { data: session } = useSession();
  return (
    <DefaultLayout>
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-3 py-5 ">
        <Card className="w-full items-center p-4 space-y-4 col-span-2 bg-surface text-surface-1">
          <div className="w-full h-56">
            <img
              alt="Finished dish"
              className="w-full h-full object-cover rounded-md"
              height="224"
              src="/images/cooking.jpg"
              style={{
                aspectRatio: '400/224',
                objectFit: 'cover',
              }}
              width="400"
            />
          </div>
          <div className="w-full flex justify-between items-center pb-4 border-b border-b-brand-variable">
            <h2 className="text-2xl font-bold">{recipe.name}</h2>
            <div>
              <Button
                href={`/recipe/${recipe.id}/cook`}
                className="ml-2"
                color="variable-accent"
              >
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
          <p className=" text-surface-2">{recipe.description}</p>
        </Card>
        <Card className="w-full p-6 space-y-4 bg-surface text-surface-1">
          <h3 className="text-xl font-bold">Ingredients</h3>
          <ul className="list-disc list-inside text-surface-2">
            {recipe.ingredients.map((ing) => (
              <li key={ing.refId} className="">
                <span>
                  {ing.count}
                  {ing.type}
                </span>
                <span> </span>
                <span>{ing.name}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="w-full p-6 space-y-4 col-span-3 bg-surface text-surface-1">
          <h3 className="text-xl font-bold">Instructions</h3>
          <ul className="list-none list-inside text-surface-2">
            {recipe.instructions
              .sort((a, b) => a.order - b.order)
              .map((inst) => (
                <li key={inst.refId}>
                  <div>
                    <span className="font-bold text-lg">{inst.order + 1}.</span>{' '}
                    {inst.description}
                  </div>
                </li>
              ))}
          </ul>
        </Card>
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
