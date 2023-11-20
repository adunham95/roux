import { getRecipe } from '@/api/queries/getRecipe';
import SidecarLayout from '@/components/Layouts/page/SidecarLayout';
import NewRecipeForm from '@/components/newRecipe/newRecipeForm';
import { SidecarIngredientList } from '@/components/sidecar/elements/IngredientList';
import SidecarInstructionList from '@/components/sidecar/elements/InstructionList';
import { RecipeMetaData } from '@/components/sidecar/elements/RecipeMetaData';
import Sidecar from '@/components/sidecar/sidecar';
import { useNewRecipe } from '@/stores/newRecipeStore';
import { IRecipe } from '@/types/recipe';
import React, { useEffect } from 'react';

const Edit = ({ recipe }: { recipe: IRecipe }) => {
  const { setRecipe, name, description, instructions, getIngredients } =
    useNewRecipe();

  useEffect(() => {
    setRecipe(recipe);
  }, [recipe]);

  function saveRecipe() {}

  return (
    <SidecarLayout
      pageName="Edit Recipe"
      sideCarStyle="w-full md:ml-4 md:max-w-sm"
      heroImg="/images/foods.jpg"
      heroTitle="Edit Recipe"
      sideCar={
        <Sidecar
          className="pt-2"
          defaultOpen="details"
          cta="Save Recipe"
          ctaOnClick={saveRecipe}
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
              child: <SidecarIngredientList ingredients={getIngredients()} />,
            },
            {
              title: 'Instructions',
              key: 'instructions',
              display: 'accordion',
              child: <SidecarInstructionList instructions={instructions} />,
            },
          ]}
        />
      }
    >
      <NewRecipeForm />
    </SidecarLayout>
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

export default Edit;
