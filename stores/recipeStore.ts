import { create } from 'zustand';
import { IBaseStore } from './baseStore';
import { IIngredientItem } from '@/types/ingredinetItem';
import { generateID } from '@/utils/generateID';
import { IRecipe } from '@/types/recipe';
import { ICreateRecipe } from '@/graphql/mutations/createRecipe';

interface IRecipeStore extends IBaseStore {
  instructions: IInstructionItem[];
  ingredients: IIngredientItem[];
  name: string;
  description: string;
  servings: number;
  setRecipe: (recipe: IRecipe) => void;
  getRecipeData: () => ICreateRecipe;
  setName: (name: string) => void;
  setServings: (servings: string | number) => void;
  setDescription: (description: string) => void;
  addIngredientItem: (instructionRefId: string) => void;
  addInstruction: () => void;
  updateIngredientItem: (
    ingredientId: string,
    key: string,
    value: string | number,
    action?: 'update' | 'copy' | 'delete',
  ) => void;
  updateInstructionItem: (
    ingredientRefId: string,
    key: string,
    value: string | number,
    action?: 'update' | 'copy' | 'delete',
  ) => void;
}

const defaultStore = {
  instructions: [],
  ingredients: [],
  history: [],
  name: '',
  description: '',
  servings: 1,
};

export const useRecipe = create<IRecipeStore>((set, get) => ({
  ...defaultStore,
  setRecipe: (recipe) => set(recipe),
  setName: (name) => set({ name }),
  setDescription: (description) => set({ description }),
  setServings: (servings) => {
    if (typeof servings === 'string') {
      servings = parseInt(servings);
    }
    set({ servings });
  },
  addIngredientItem: (instructionRefId) => {
    const refId = generateID();
    const newItem = {
      instructionRefId,
      refId,
      count: 0,
      name: 'Name',
      type: '',
    };
    set((state) => ({
      ingredients: [...state.ingredients, newItem],
    }));
  },
  addInstruction: () => {
    const instructions = get().instructions;
    const refId = generateID();
    const newItem = {
      refId,
      order: instructions.length,
      description: ``,
    };
    set((state) => ({
      instructions: [...state.instructions, newItem],
    }));
  },
  updateIngredientItem: (ingredientID, key, value, action) => {
    console.log('updateIngredientItem');
    let ingredients = get().ingredients;

    const index = ingredients.findIndex(({ refId }) => refId === ingredientID);

    if (index >= 0) {
      switch (action) {
        case 'copy':
          const refId = generateID();
          ingredients = [...ingredients, { ...ingredients[index], refId }];
          break;
        case 'delete':
          ingredients = ingredients.filter(
            ({ refId }) => refId !== ingredientID,
          );
          break;
        default:
          ingredients[index] = { ...ingredients[index], [key]: value };
      }
    }
    ingredients = ingredients;
    set({ ingredients });
  },
  updateInstructionItem: (instructionRefId, key, value, action) => {
    const instructions = get().instructions;
    const index = instructions.findIndex(
      ({ refId }) => refId === instructionRefId,
    );
    if (index >= 0) {
      switch (action) {
        case 'copy':
          const newInstId = generateID();
          set({
            instructions: [
              ...instructions,
              {
                ...instructions[index],
                order: instructions.length,
                refId: newInstId,
              },
            ],
          });
          break;
        case 'delete':
          set({
            instructions: instructions.filter(
              ({ refId }) => refId !== instructionRefId,
            ),
          });
          break;
        default:
          instructions[index] = { ...instructions[index], [key]: value };
          set({ instructions });
      }
    }
  },
  getRecipeData: () => {
    const instructions = get().instructions;
    const ingredients = get().ingredients;
    const name = get().name;
    const servings = get().servings;
    const description = get().description;
    return {
      instructions,
      ingredients,
      name,
      description,
      servings,
    };
  },
  clear: () => set(defaultStore),
}));
