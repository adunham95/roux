import { getRecipe } from '@/api/queries/getRecipe';
import SidecarLayout from '@/components/Layouts/page/SidecarLayout';
import NewRecipeForm from '@/components/newRecipe/newRecipeForm';
import { RecipeSidecar } from '@/components/sidecar/sidecars/RecipeSidecar';
import { useNewRecipe } from '@/stores/newRecipeStore';
import { IRecipe } from '@/types/recipe';
import React, { useEffect } from 'react';

const Edit = ({ recipe }: { recipe: IRecipe }) => {
  const { setRecipe } = useNewRecipe();
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
      sideCar={<RecipeSidecar onSave={saveRecipe} />}
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
