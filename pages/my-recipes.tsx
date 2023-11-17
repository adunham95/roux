import { useGetMyRecipes } from '@/api/queries/getMyRecipes';
import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import { Container } from '@/components/container';
import { Loader } from '@/components/loader/loader';
import RecipeCardSmall from '@/components/recipe-card/recipe-card-small';
import { IRecipe } from '@/types/recipe';
import Link from 'next/link';
import React from 'react';

const MyRecipes = () => {
  const { data, isLoading } = useGetMyRecipes();
  console.log({ recipes: data });

  return (
    <DefaultLayout
      pageName="Dashboard"
      heroTitle="My Recipes"
      heroImg="/images/foods.jpg"
    >
      <Container className="py-5">
        {isLoading && <Loader />}
        {data && (
          <ul
            role="list"
            className="grid gap-6 grid-template-auto grid-template-3"
          >
            {data.map((recipe: IRecipe) => (
              <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
                <RecipeCardSmall title={recipe.name} full />
              </Link>
            ))}
            {[...new Array(7)].map((_, i) => (
              <div key={`placeholder-${i}`}></div>
            ))}
          </ul>
        )}
      </Container>
    </DefaultLayout>
  );
};

export default MyRecipes;
