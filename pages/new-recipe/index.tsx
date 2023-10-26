import SidecarLayout from '@/components/Layouts/SidecarLayout';
import { RecipeMetaData } from '@/components/sidecar/elements/RecipeMetaData';
import { SidecarIngredientList } from '@/components/sidecar/elements/IngredientList';
import Sidecar from '@/components/sidecar/sidecar';
import React from 'react';
import NewRecipeForm from '@/components/newRecipe/newRecipeForm';
import { useNewRecipe } from '@/stores/newRecipeStore';
import SidecarInstructionList from '@/components/sidecar/elements/InstructionList';

const NewRecipe = () => {
  const { name, description, ingredients, instructions } = useNewRecipe();
  return (
    <SidecarLayout
      sideCar={
        <Sidecar
          className="pt-2"
          defaultOpen="details"
          options={[
            {
              title: 'Details',
              key: 'details',
              display: 'accordion',
              child: <RecipeMetaData name={name} description={description} />,
            },
            {
              title: 'Ingredients',
              key: 'ingredients',
              display: 'accordion',
              child: <SidecarIngredientList ingredients={ingredients} />,
            },
            {
              title: 'Instructions',
              key: 'instructions',
              display: 'accordion',
              child: (
                <SidecarInstructionList
                  ingredients={ingredients}
                  instructions={instructions}
                />
              ),
            },
          ]}
        />
      }
      sideCarStyle="w-full md:ml-4 md:max-w-sm"
      heroImg="/images/foods.jpg"
      heroTitle="New Recipe"
    >
      <NewRecipeForm />
    </SidecarLayout>
  );
};

export default NewRecipe;
