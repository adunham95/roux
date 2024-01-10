import { getRecipe } from '@/api/queries/getRecipe';
import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import { ActivityFeed } from '@/components/activityFeed/activityFeed';
import { Button } from '@/components/buttons/button';
import { Container } from '@/components/container';
import { Card } from '@/components/ui/card';
import { IRecipe } from '@/types/recipe';
import { hasPermission } from '@/utils/authGate';
import { UserPermissions } from '@/utils/permissions';
import { useSession } from 'next-auth/react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const tabs = [
  { name: 'Ingredients', href: '#ingredients', current: false },
  { name: 'Instructions', href: '#instructions', current: false },
  { name: 'History', href: '#history', current: false },
];

const RecipeId = ({ recipe }: { recipe: IRecipe }) => {
  console.log(recipe);
  const { data: session } = useSession();
  return (
    <DefaultLayout>
      <div className="bg-surface shadow-sm sticky top-0 md:hidden flex justify-between text-surface-1">
        <div className="border-b border-gray-200 w-full">
          <nav
            className="-mb-px flex justify-center space-x-8"
            aria-label="Tabs"
          >
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={twMerge(
                  tab.current
                    ? 'border-brand-500 text-brand-500'
                    : 'border-transparent text-surface-1 hover:border-surface-2 hover:test-surface-2',
                  'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
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
          <div className="w-full flex flex-col lg:flex-row justify-between items-center pb-4 border-b border-b-brand-variable">
            <div className="flex items-baseline justify-start w-full mb-1">
              <h2 className="text-2xl font-bold">{recipe.name}</h2>
              <p className="pl-2 text-sm">by {recipe.team?.name}</p>
            </div>
            <div className="w-full flex">
              <Button
                href={`/recipe/${recipe.id}/cook`}
                className="lg:ml-2 w-full"
                color="variable-accent"
              >
                Cook
              </Button>
              <Button className="ml-2 w-full" color="variable">
                Fork
              </Button>
              {hasPermission(session, UserPermissions.EDIT_RECIPE) && (
                <Button
                  href={`/recipe/${recipe.id}/edit`}
                  className="ml-2 w-full"
                  color="variable"
                >
                  Edit
                </Button>
              )}
            </div>
          </div>
          <p className=" text-surface-2">{recipe.description}</p>
        </Card>
        <Card className="w-full p-6 space-y-4 hidden md:block col-span-1 bg-surface text-surface-1">
          <h3 className="text-xl font-bold">History</h3>
          <ActivityFeed
            backgroundColor="bg-surface"
            items={[
              {
                id: '0',
                person: recipe.user,
                type: 'created',
                dateTime: new Date(parseInt(recipe.createdAt) || 0),
              },
              ...recipe.history.map((hist) => {
                return {
                  id: hist.id,
                  person: hist.user,
                  type: 'edited',
                  dateTime: new Date(parseInt(hist.createdAt)),
                };
              }),
            ]}
          />
        </Card>
        <Card
          id="ingredients"
          className="w-full p-6 space-y-4 col-span-2 md:col-span-1 bg-surface text-surface-1"
        >
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

        <Card
          id="instructions"
          className="w-full p-6 space-y-4 col-span-2 bg-surface text-surface-1"
        >
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
        <Card
          id="history"
          className="w-full p-6 space-y-4 block md:hidden col-span-2 bg-surface text-surface-1"
        >
          <h3 className="text-xl font-bold">History</h3>
          <ActivityFeed
            backgroundColor="bg-surface"
            items={[
              {
                id: '0',
                person: recipe.user,
                type: 'created',
                dateTime: new Date(parseInt(recipe.createdAt) || 0),
              },
              ...recipe.history.map((hist) => {
                return {
                  id: hist.id,
                  person: hist.user,
                  type: 'edited',
                  dateTime: new Date(parseInt(hist.createdAt)),
                };
              }),
            ]}
          />
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
