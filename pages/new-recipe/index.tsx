import SidecarLayout from '@/components/Layouts/SidecarLayout';
import Sidecar from '@/components/sidecar/sidecar';
import dynamic from 'next/dynamic';
import React from 'react';

const RecipeForm = dynamic(
  () => import('@/components/newRecipe/newRecipeForm'),
  { ssr: false },
);

const NewRecipe = () => {
  return (
    <SidecarLayout
      sideCar={<Sidecar className="pt-2" />}
      sideCarStyle="w-full md:ml-4 md:max-w-sm"
      heroImg="/images/foods.jpg"
      heroTitle="New Recipe"
    >
      <RecipeForm />
    </SidecarLayout>
  );
};

export default NewRecipe;
