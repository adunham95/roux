import SidecarLayout from '@/components/Layouts/page/SidecarLayout';
import { RecipeMetaData } from '@/components/sidecar/elements/RecipeMetaData';
import { SidecarIngredientList } from '@/components/sidecar/elements/IngredientList';
import Sidecar from '@/components/sidecar/sidecar';
import React from 'react';
import NewRecipeForm from '@/components/newRecipe/newRecipeForm';
import { useNewRecipe } from '@/stores/newRecipeStore';
import SidecarInstructionList from '@/components/sidecar/elements/InstructionList';
import { useCreateRecipe } from '@/api/mutation/createRecipe';
import { useToast } from '@/stores/toast';

const NewRecipe = () => {
  const {
    name,
    description,
    instructions,
    getIngredients,
    getFormattedInstructions,
  } = useNewRecipe();
  const { addToast } = useToast();
  const { mutateAsync: createRecipeAsync } = useCreateRecipe();
  async function saveRecipe() {
    const formattedInstructions = getFormattedInstructions();

    await createRecipeAsync(
      {
        name,
        description,
        instructions: formattedInstructions,
      },
      {
        onSuccess(data) {
          addToast('Recipe successfully created', 'success');
          console.log(data);
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
      sideCarStyle="w-full md:ml-4 md:max-w-sm"
      heroImg="/images/foods.jpg"
      heroTitle="New Recipe"
    >
      <NewRecipeForm />
    </SidecarLayout>
  );
};

NewRecipe.auth = true;

export default NewRecipe;
