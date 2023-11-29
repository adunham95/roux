import { IIngredientItem } from '@/types/ingredinetItem';
import { IRecipe } from '@/types/recipe';
import { set } from 'lodash';

interface IEditableRecipe
  extends Omit<IRecipe, 'instructions' | 'ingredients'> {
  instructions: { [key: string]: IInstructionItem };
  ingredients: { [key: string]: IIngredientItem };
}

//TODO figure out how to make this run faster
export function compileRecipe(recipe: IRecipe) {
  if (recipe.history) {
    const newRecipe = Object.assign({}, recipe) as unknown as IEditableRecipe;
    //Convert to An Object
    newRecipe.instructions = {};
    newRecipe.ingredients = {};
    recipe.instructions.forEach(({ refId, ...inst }) => {
      newRecipe.instructions[refId] = {
        refId,
        ...inst,
      };
    });
    recipe.ingredients.forEach(({ refId, ...inst }) => {
      newRecipe.ingredients[refId] = {
        refId,
        ...inst,
      };
    });

    const actions = {
      add: [],
      delete: [],
      update: [],
    } as {
      add: string[];
      delete: string[];
      update: { key: string; value: unknown }[];
    };
    const history = recipe.history.reduce((accumulator, currentValue) => {
      accumulator.add = [...accumulator.add, ...currentValue.add];
      accumulator.delete = [...accumulator.delete, ...currentValue.delete];
      accumulator.update = [...accumulator.update, ...currentValue.update];
      return accumulator;
    }, actions);

    history.update.map(({ key, value }) => {
      set(newRecipe, key, value);
    });

    const formattedRecipe = {
      ...newRecipe,
      instructions: Object.values(newRecipe.instructions),
      ingredients: Object.values(newRecipe.ingredients),
    };
    console.log('formattedRecipe', formattedRecipe);
    return formattedRecipe;
  }
  return recipe;
}
