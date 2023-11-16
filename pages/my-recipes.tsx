import { useGetMyRecipes } from '@/api/queries/getMyRecipes';
import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import { Container } from '@/components/container';
import RecipeCardSmall from '@/components/recipe-card/recipe-card-small';
import { IRecipe } from '@/types/recipe';
import Link from 'next/link';
import React from 'react';

const MyRecipes = () => {
  const { data } = useGetMyRecipes();
  console.log({ recipes: data });

  return (
    <DefaultLayout
      pageName="Dashboard"
      heroTitle="My Recipes"
      heroImg="/images/foods.jpg"
    >
      <Container className="py-5">
        {data && (
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {data.map((recipe: IRecipe) => (
              <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
                <RecipeCardSmall title={recipe.name} />
              </Link>
            ))}
          </ul>
        )}
      </Container>
    </DefaultLayout>
  );
};

export default MyRecipes;
