import { useGetMyRecipes } from '@/api/queries/getMyRecipes';
import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import { AlertPanel } from '@/components/alertPanel/alertPanel';
import { Container } from '@/components/container';
import { Loader } from '@/components/loader/loader';
import RecipeCardSmall from '@/components/recipe-card/recipe-card-small';
import { IRecipe } from '@/types/recipe';
import Link from 'next/link';
import React, { useEffect } from 'react';

const MyRecipes = () => {
  const { data = [], isLoading, isError } = useGetMyRecipes();
  console.log({ recipes: data });

  useEffect(() => {
    if (isError) {
      console.warn('Error Loading my recipes');
    }
  }, [isError]);

  return (
    <DefaultLayout
      pageName="Dashboard"
      heroTitle="My Recipes"
      heroImg="/images/foods.jpg"
    >
      <Container className="py-5">
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
                <RecipeCardSmall title={recipe.name} full />
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

export default MyRecipes;
