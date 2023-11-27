import { create } from 'zustand';
import { IBaseStore } from './baseStore';
import { IIngredientItem } from '@/types/ingredinetItem';
import { IInstructionItem } from '@/types/instructionItem';
import { generateID } from '@/utils/generateID';
import { ICreateInstruction } from '@/graphql/mutations/createRecipe';
import { IRecipe } from '@/types/recipe';

interface INewRecipeStore extends IBaseStore {
  ingredients: IIngredientItem[];
  instructions: IInstructionItem[];
  history: RecipeHistory;
  name: string;
  description: string;
  servings: number;
  setRecipe: (recipe: IRecipe) => void;
  setName: (name: string) => void;
  setServings: (servings: string | number) => void;
  setDescription: (description: string) => void;
  addIngredientItem: (instructionID: string) => void;
  addInstruction: () => void;
  updateIngredientItem: (
    ingredientID: string,
    instructionID: string,
    key: string,
    value: string | number,
    action?: 'update' | 'copy' | 'delete',
  ) => void;
  updateInstructionItem: (
    instructionID: string,
    key: string,
    value: string | number,
    action?: 'update' | 'copy' | 'delete',
  ) => void;
  getIngredients: () => IIngredientItem[];
  getFormattedInstructions: () => ICreateInstruction[];
}

const defaultStore = {
  ingredients: [],
  instructions: [],
  history: { add: {}, update: {}, delete: [] },
  name: '',
  description: '',
  servings: 1,
};

export const useNewRecipe = create<INewRecipeStore>((set, get) => ({
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
  addIngredientItem: (instructionID) => {
    const instructions = get().instructions;
    const index = instructions.findIndex(
      ({ refId }) => refId === instructionID,
    );
    const newItem = {
      refId: generateID(),
      count: 0,
      name: '',
      type: '',
    };
    instructions[index].ingredients = [
      ...instructions[index].ingredients,
      newItem,
    ];
    set({ instructions });
  },
  addInstruction: () => {
    const instructions = get().instructions;
    const newItem = {
      refId: generateID(),
      order: instructions.length,
      description: ``,
      ingredients: [],
    };
    set((state) => ({
      instructions: [...state.instructions, newItem],
    }));
  },
  updateIngredientItem: (ingredientID, instructionID, value, key, action) => {
    console.log('updateIngredientItem');
    const instructions = get().instructions;
    const instruction = instructions.find(
      ({ refId }) => refId === instructionID,
    );
    const instructionIndex = instructions.findIndex(
      ({ refId }) => refId === instructionID,
    );

    if (instructionIndex < 0) {
      return false;
    }
    let ingredients = instruction?.ingredients || [];
    const index = ingredients.findIndex(({ refId }) => refId === ingredientID);

    if (index >= 0) {
      switch (action) {
        case 'copy':
          ingredients = [
            ...ingredients,
            { ...ingredients[index], refId: generateID() },
          ];
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
    console.log(ingredients);
    instructions[instructionIndex].ingredients = ingredients;
    set({ instructions });
  },
  updateInstructionItem: (instructionID, key, value, action) => {
    const instructions = get().instructions;
    const index = instructions.findIndex(
      ({ refId }) => refId === instructionID,
    );
    if (index >= 0) {
      switch (action) {
        case 'copy':
          set({
            instructions: [
              ...instructions,
              {
                ...instructions[index],
                ingredients: instructions[index].ingredients.map((ing) => {
                  return { ...ing, refId: generateID() };
                }),
                order: instructions.length,
                refId: generateID(),
              },
            ],
          });
          break;
        case 'delete':
          set({
            instructions: instructions.filter(
              ({ refId }) => refId !== instructionID,
            ),
          });
          break;
        default:
          instructions[index] = { ...instructions[index], [key]: value };
          set({ instructions });
      }
    }
  },
  getIngredients: () => {
    const instructions = get().instructions;
    const ingredients = instructions.map((int) => int.ingredients);

    return ingredients.flat();
  },
  getFormattedInstructions: () => {
    const instructions = get().instructions;
    return instructions;
  },
  clear: () => set(defaultStore),
}));
