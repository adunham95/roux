import { create } from 'zustand';
import { IBaseStore } from './baseStore';
import { IIngredientItem } from '@/types/ingredinetItem';
import { generateID } from '@/utils/generateID';
import { IRecipe } from '@/types/recipe';
import { ICreateRecipe } from '@/graphql/mutations/createRecipe';

interface IRecipeStore extends IBaseStore {
  instructions: IInstructionItem[];
  ingredients: IIngredientItem[];
  currentHistory: RecipeHistory;
  history: RecipeHistoryArray[];
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
  getFormattedHistory: () => { key: string; value: unknown }[];
  clearHistory: () => void;
}

const defaultStore = {
  instructions: [],
  ingredients: [],
  currentHistory: {},
  history: [],
  name: '',
  description: '',
  servings: 1,
};

export const useRecipe = create<IRecipeStore>((set, get) => ({
  ...defaultStore,
  setRecipe: (recipe) => set(recipe),
  setName: (name) => {
    const currentHistory = get().currentHistory;
    currentHistory.name = name;
    set({ name, currentHistory });
  },
  setDescription: (description) => {
    const currentHistory = get().currentHistory;
    currentHistory.description = description;
    set({ description });
  },
  setServings: (servings) => {
    const currentHistory = get().currentHistory;
    if (typeof servings === 'string') {
      servings = parseInt(servings);
    }
    currentHistory.servings = servings;
    set({ servings, currentHistory });
  },
  addIngredientItem: (instructionRefId) => {
    const currentHistory = get().currentHistory;
    const refId = generateID();
    const newItem = {
      instructionRefId,
      refId,
      count: 0,
      name: 'Name',
      type: '',
    };
    currentHistory[`ingredients.${refId}.refId`] = refId;
    currentHistory[`ingredients.${refId}.instructionRefId`] = instructionRefId;
    currentHistory[`ingredients.${refId}.count`] = 0;
    currentHistory[`ingredients.${refId}.name`] = '';
    currentHistory[`ingredients.${refId}.type`] = '';
    set((state) => ({
      ingredients: [...state.ingredients, newItem],
      currentHistory,
    }));
  },
  addInstruction: () => {
    const currentHistory = get().currentHistory;
    const instructions = get().instructions;
    const refId = generateID();
    const newItem = {
      refId,
      order: instructions.length,
      description: ``,
    };
    currentHistory[`instructions.${refId}.refId`] = refId;
    currentHistory[`instructions.${refId}.order`] = instructions.length;
    currentHistory[`instructions.${refId}.description`] = '';
    set((state) => ({
      instructions: [...state.instructions, newItem],
      currentHistory,
    }));
  },
  updateIngredientItem: (ingredientID, key, value, action) => {
    const currentHistory = get().currentHistory;
    let ingredients = get().ingredients;

    const index = ingredients.findIndex(({ refId }) => refId === ingredientID);

    if (index >= 0) {
      switch (action) {
        case 'copy':
          const refId = generateID();
          ingredients = [...ingredients, { ...ingredients[index], refId }];
          currentHistory[`ingredients.${refId}.refId`] = refId;
          currentHistory[`ingredients.${refId}.instructionRefId`] =
            ingredients[index].instructionRefId;
          currentHistory[`ingredients.${refId}.count`] = 0;
          currentHistory[`ingredients.${refId}.name`] = '';
          currentHistory[`ingredients.${refId}.type`] = '';
          break;
        case 'delete':
          ingredients = ingredients.filter(
            ({ refId }) => refId !== ingredientID,
          );
          break;
        default:
          currentHistory[`ingredients.${ingredientID}.${key}`] = value;
          ingredients[index] = { ...ingredients[index], [key]: value };
      }
    }
    ingredients = ingredients;
    set({ ingredients, currentHistory });
  },
  updateInstructionItem: (instructionRefId, key, value, action) => {
    const currentHistory = get().currentHistory;
    const instructions = get().instructions;
    const index = instructions.findIndex(
      ({ refId }) => refId === instructionRefId,
    );
    if (index >= 0) {
      switch (action) {
        case 'copy':
          const newInstId = generateID();
          currentHistory[`instructions.${newInstId}.refId`] = newInstId;
          currentHistory[`instructions.${newInstId}.order`] =
            instructions.length;
          currentHistory[`instructions.${newInstId}.description`] = '';
          set({
            currentHistory,
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
          currentHistory[`instructions.${instructionRefId}.${key}`] =
            value.toString();
          instructions[index] = { ...instructions[index], [key]: value };
          set({ instructions, currentHistory });
      }
    }
  },
  getFormattedHistory: () => {
    const currentHistory = get().currentHistory;
    return Object.entries(currentHistory).map(([key, value]) => {
      return { key, value: JSON.stringify(value) };
    });
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
  clearHistory: () => set({ currentHistory: {} }),
  clear: () => set(defaultStore),
}));
