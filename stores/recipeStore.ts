import { create } from 'zustand';
import { IBaseStore } from './baseStore';
import { IIngredientItem } from '@/types/ingredinetItem';
import { generateID } from '@/utils/generateID';
import { IRecipe } from '@/types/recipe';
import { ICreateRecipe } from '@/graphql/mutations/createRecipe';

interface IRecipeStore extends IBaseStore {
  instructions: IInstructionItem[];
  ingredients: IIngredientItem[];
  currentHistory: RecipeHistoryObject;
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
    currentHistory.name = {
      name,
      displayName: 'Recipe Name',
      display: `to ${name}`,
    };
    set({ name, currentHistory });
  },
  setDescription: (description) => {
    const currentHistory = get().currentHistory;
    currentHistory.description = {
      description,
      displayName: 'Recipe Description',
      display: `to ${description}`,
    };
    set({ description });
  },
  setServings: (servings) => {
    const currentHistory = get().currentHistory;
    if (typeof servings === 'string') {
      servings = parseInt(servings);
    }
    currentHistory.servings = {
      servings,
      displayName: 'Recipe Servings',
      display: `to ${servings}`,
    };
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

    currentHistory[`ingredients.${refId}`] = {
      action: 'ADD',
      ...newItem,
    };
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
    currentHistory[`instructions.${refId}`] = {
      action: 'ADD',
      displayName: `Instruction ${instructions.length + 1}`,
      ...newItem,
    };
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
          currentHistory[`ingredients.${refId}`] = {
            action: 'ADD',
            ...ingredients[index],
            refId,
          };

          break;
        case 'delete':
          currentHistory[`ingredients.${ingredientID}`] = { action: 'DELETE' };
          ingredients = ingredients.filter(
            ({ refId }) => refId !== ingredientID,
          );
          break;
        default:
          const newIng = { ...ingredients[index], [key]: value };
          currentHistory[`ingredients.${ingredientID}`] = {
            ...currentHistory[`ingredients.${ingredientID}`],
            displayName: `Ingredient`,
            display: `x${newIng.count} ${newIng.name}  ${newIng.type}`,
            [key]: value,
          };
          ingredients[index] = newIng;
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
          currentHistory[`instructions.${newInstId}`] = {
            action: 'ADD',
            displayName: `Instruction ${instructions.length + 1}`,
            ...instructions[index],
            order: instructions.length,
            refId: newInstId,
          };
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
          currentHistory[`instructions.${instructionRefId}`] = {
            action: 'DELETE',
          };
          set({
            currentHistory,
            instructions: instructions.filter(
              ({ refId }) => refId !== instructionRefId,
            ),
          });
          break;
        default:
          const newInstruction = { ...instructions[index], [key]: value };
          currentHistory[`instructions.${instructionRefId}`] = {
            ...currentHistory[`instructions.${instructionRefId}`],
            displayName: `Instruction ${index + 1}`,
            display: `${key} to ${value}`,
            [key]: value,
          };
          instructions[index] = newInstruction;
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
