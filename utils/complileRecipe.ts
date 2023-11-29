import { IIngredientItem } from '@/types/ingredinetItem';
import { IInstructionItem } from '@/types/instructionItem';
import { IRecipe } from '@/types/recipe';
import { set } from 'lodash';

interface IEditableInstruction extends Omit<IInstructionItem, 'ingredients'> {
  ingredients: { [key: string]: IIngredientItem };
}

interface IEditableRecipe extends Omit<IRecipe, 'instructions'> {
  instructions: { [key: string]: IEditableInstruction };
}

//TODO figure out how to make this run faster
export function compileRecipe(recipe: IRecipe) {
  if (recipe.history) {
    const newRecipe = Object.assign({}, recipe) as unknown as IEditableRecipe;
    //Convert to An Object
    newRecipe.instructions = {};
    recipe.instructions.forEach(({ refId, ingredients, ...inst }) => {
      const ingredientObj = {} as { [key: string]: IIngredientItem };
      ingredients.forEach((ingredient) => {
        ingredientObj[ingredient.refId] = ingredient;
      });
      newRecipe.instructions[refId] = {
        refId,
        ...inst,
        ingredients: ingredientObj,
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
      instructions: Object.values(newRecipe.instructions).map(
        ({ ingredients, ...inst }) => {
          return {
            ...inst,
            ingredients: Object.values(ingredients),
          };
        },
      ),
    };
    console.log('formattedRecipe', formattedRecipe);
    return formattedRecipe;
  }
  return recipe;
}
