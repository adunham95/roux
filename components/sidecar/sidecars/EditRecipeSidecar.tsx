import React from 'react';
import Sidecar from '../sidecar';
import { RecipeMetaData } from '../elements/RecipeMetaData';
import { SidecarIngredientList } from '../elements/IngredientList';
import SidecarInstructionList from '../elements/InstructionList';
import { useRecipe } from '@/stores/recipeStore';
import { RecipeHistory } from '../elements/RecipeHistory';

interface IProps {
  onSave: () => void;
}

export const EditRecipeSidecar = (props: IProps) => {
  const { onSave } = props;
  const { name, description, servings, instructions, ingredients, history } =
    useRecipe();

  console.log('EditRecipeSidecarhistory', history);

  return (
    <Sidecar
      className="pt-2"
      defaultOpen="details"
      cta="Save Recipe"
      ctaOnClick={onSave}
      options={[
        {
          title: 'Details',
          key: 'details',
          display: 'accordion',
          child: (
            <RecipeMetaData
              name={name}
              description={description}
              servings={servings}
            />
          ),
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
              instructions={instructions}
              ingredients={ingredients}
            />
          ),
        },
        {
          title: 'History',
          key: 'history',
          display: 'accordion',
          child: <RecipeHistory history={history || []} />,
        },
      ]}
    />
  );
};
