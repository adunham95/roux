import SidecarLayout from '@/components/Layouts/page/SidecarLayout';
import React from 'react';
import NewRecipeForm from '@/components/newRecipe/newRecipeForm';
import { useRecipe } from '@/stores/recipeStore';
import { useCreateRecipe } from '@/api/mutation/createRecipe';
import { useToast } from '@/stores/toast';
import { RecipeSidecar } from '@/components/sidecar/sidecars/RecipeSidecar';
import { useRouter } from 'next/router';

const NewRecipe = () => {
  const router = useRouter();
  const { name, description, servings, instructions, ingredients } =
    useRecipe();
  const { addToast } = useToast();
  const { mutateAsync: createRecipeAsync } = useCreateRecipe();
  async function saveRecipe() {
    await createRecipeAsync(
      {
        name,
        description,
        servings,
        instructions,
        ingredients,
      },
      {
        onSuccess(data) {
          addToast('Recipe successfully created', 'success');
          console.log(data);
          console.log(data.createRecipe.id);
          setTimeout(() => {
            router.push(`/recipe/${data.createRecipe.id}`);
          }, 500);
        },
        onError(error) {
          addToast('Error saving recipe', 'danger');
          console.log('ERROR');
          console.log(error);
        },
      },
    );
  }
  return (
    <SidecarLayout
      pageName="New Recipe"
      sideCar={<RecipeSidecar onSave={saveRecipe} />}
      sideCarStyle="w-full md:ml-4 md:max-w-sm"
      heroImg="/images/foods.jpg"
      heroTitle="New Recipe"
    >
      <NewRecipeForm />
    </SidecarLayout>
  );
};

export default NewRecipe;
