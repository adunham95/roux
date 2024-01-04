import { create } from 'zustand';
import { IBaseStore } from './baseStore';
import { IIngredientItem } from '@/types/ingredinetItem';
import { generateID } from '@/utils/generateID';
import { IRecipe } from '@/types/recipe';

interface INewRecipeStore extends IBaseStore {
  instructions: IInstructionItem[];
  ingredients: IIngredientItem[];
  currentHistory: RecipeHistory;
  history: RecipeHistoryArray[];
  name: string;
  description: string;
  servings: number;
  setRecipe: (recipe: IRecipe) => void;
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
  ingredients: [],
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
    currentHistory.update[`ingredients.${refId}.refId`] = refId;
    currentHistory.update[`ingredients.${refId}.instructionRefId`] =
      instructionRefId;
    currentHistory.update[`ingredients.${refId}.count`] = 0;
    currentHistory.update[`ingredients.${refId}.name`] = '';
    currentHistory.update[`ingredients.${refId}.type`] = '';
    set((state) => ({
      ingredients: [...state.ingredients, newItem],
      currentHistory,
    }));
  },
  addInstruction: () => {
    const instructions = get().instructions;
    const currentHistory = get().currentHistory;
    const refId = generateID();
    const newItem = {
      refId,
      order: instructions.length,
      description: ``,
    };
    currentHistory.update[`ingredients.${refId}.refId`] = refId;
    currentHistory.update[`ingredients.${refId}.order`] = instructions.length;
    currentHistory.update[`ingredients.${refId}.description`] = '';
    set((state) => ({
      instructions: [...state.instructions, newItem],
    }));
  },
  updateIngredientItem: (ingredientID, key, value, action) => {
    console.log('updateIngredientItem');
    let ingredients = get().ingredients;
    const currentHistory = get().currentHistory;

    const index = ingredients.findIndex(({ refId }) => refId === ingredientID);

    if (index >= 0) {
      switch (action) {
        case 'copy':
          const refId = generateID();
          currentHistory.update[`ingredients.${refId}.refId`] = refId;
          currentHistory.update[`ingredients.${refId}.instructionRefId`] =
            ingredients[index].instructionRefId;
          currentHistory.update[`ingredients.${refId}.count`] = 0;
          currentHistory.update[`ingredients.${refId}.name`] = '';
          currentHistory.update[`ingredients.${refId}.type`] = '';
          ingredients = [...ingredients, { ...ingredients[index], refId }];
          break;
        case 'delete':
          currentHistory.delete.push(`ingredients.${ingredientID}`);
          ingredients = ingredients.filter(
            ({ refId }) => refId !== ingredientID,
          );
          break;
        default:
          ingredients[index] = { ...ingredients[index], [key]: value };
          currentHistory.update[`ingredients.${ingredientID}.${key}`] = value;
      }
    }
    ingredients = ingredients;
    set({ ingredients, currentHistory });
  },
  updateInstructionItem: (instructionRefId, key, value, action) => {
    const instructions = get().instructions;
    const currentHistory = get().currentHistory;
    const index = instructions.findIndex(
      ({ refId }) => refId === instructionRefId,
    );
    if (index >= 0) {
      switch (action) {
        case 'copy':
          const newInstId = generateID();
          currentHistory.update[`instructions.${newInstId}.refId`] = newInstId;
          currentHistory.update[`instructions.${newInstId}.order`] =
            instructions.length;
          currentHistory.update[`instructions.${newInstId}.description`] = '';
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
          currentHistory.delete.push(instructionRefId);
          set({
            currentHistory,
            instructions: instructions.filter(
              ({ refId }) => refId !== instructionRefId,
            ),
          });
          break;
        default:
          console.log(value, instructionRefId, key);
          currentHistory.update[`instructions.${instructionRefId}.${key}`] =
            value.toString();
          instructions[index] = { ...instructions[index], [key]: value };
          set({ instructions, currentHistory });
      }
    }
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
