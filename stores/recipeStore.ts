import { create } from 'zustand';
import { IBaseStore } from './baseStore';
import { IIngredientItem } from '@/types/ingredinetItem';
import { IInstructionItem } from '@/types/instructionItem';
import { generateID } from '@/utils/generateID';
import { ICreateInstruction } from '@/graphql/mutations/createRecipe';
import { IRecipe } from '@/types/recipe';

interface INewRecipeStore extends IBaseStore {
  instructions: IInstructionItem[];
  currentHistory: RecipeHistory;
  history: RecipeHistoryArray[];
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
  getFormattedHistory: () => {
    add: string[];
    delete: string[];
    update: { key: string; value: unknown }[];
  };
  clearHistory: () => void;
}

const defaultHistory = { add: [], update: {}, delete: [] };

const defaultStore = {
  instructions: [],
  currentHistory: defaultHistory,
  history: [],
  name: '',
  description: '',
  servings: 1,
};

export const useNewRecipe = create<INewRecipeStore>((set, get) => ({
  ...defaultStore,
  setRecipe: (recipe) => set(recipe),
  setName: (name) => {
    const currentHistory = get().currentHistory;
    currentHistory.update.name = name;
    set({ name, currentHistory });
  },
  setDescription: (description) => {
    const currentHistory = get().currentHistory;
    currentHistory.update.description = description;
    set({ description });
  },
  setServings: (servings) => {
    const currentHistory = get().currentHistory;
    if (typeof servings === 'string') {
      servings = parseInt(servings);
    }
    currentHistory.update.servings = servings;
    set({ servings, currentHistory });
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
  updateIngredientItem: (instructionID, ingredientID, key, value, action) => {
    console.log('updateIngredientItem');
    const instructions = get().instructions;
    const currentHistory = get().currentHistory;
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
          currentHistory.delete.push(
            `instructions.${instructionID}.ingredients.${ingredientID}`,
          );
          ingredients = ingredients.filter(
            ({ refId }) => refId !== ingredientID,
          );
          break;
        default:
          ingredients[index] = { ...ingredients[index], [key]: value };
          currentHistory.update[
            `instructions.${instructionID}.ingredients.${ingredientID}.${key}`
          ] = value;
      }
    }
    console.log({ ingredients, currentHistory });
    instructions[instructionIndex].ingredients = ingredients;
    set({ instructions, currentHistory });
  },
  updateInstructionItem: (instructionID, key, value, action) => {
    const instructions = get().instructions;
    const currentHistory = get().currentHistory;
    const index = instructions.findIndex(
      ({ refId }) => refId === instructionID,
    );
    if (index >= 0) {
      switch (action) {
        case 'copy':
          set({
            currentHistory,
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
          currentHistory.delete.push(instructionID);
          set({
            currentHistory,
            instructions: instructions.filter(
              ({ refId }) => refId !== instructionID,
            ),
          });
          break;
        default:
          console.log(value, instructionID, key);
          currentHistory.update[`instructions.${instructionID}.${key}`] =
            value.toString();
          instructions[index] = { ...instructions[index], [key]: value };
          set({ instructions, currentHistory });
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
  getFormattedHistory: () => {
    const currentHistory = get().currentHistory;
    return {
      add: currentHistory.add,
      delete: currentHistory.delete,
      update: Object.entries(currentHistory.update).map(([key, value]) => {
        return { key, value };
      }),
    };
  },
  clearHistory: () => set({ currentHistory: defaultHistory }),
  clear: () => set(defaultStore),
}));
