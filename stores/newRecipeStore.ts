import { create } from 'zustand';
import { IBaseStore } from './baseStore';
import { IIngredientItem } from '@/types/ingredinetItem';
import { IInstructionItem } from '@/types/instructionItem';
import { generateID } from '@/utils/generateID';

interface INewRecipeStore extends IBaseStore {
  ingredients: IIngredientItem[];
  instructions: IInstructionItem[];
  name: string;
  description: string;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  addIngredientItem: () => void;
  addInstruction: () => void;
  updateIngredientItem: (
    item: IIngredientItem,
    action?: 'update' | 'copy' | 'delete',
  ) => void;
  updateInstructionItem: (
    item: IInstructionItem,
    action?: 'update' | 'copy' | 'delete',
  ) => void;
}

const defaultStore = {
  ingredients: [],
  instructions: [],
  name: '',
  description: '',
};

export const useNewRecipe = create<INewRecipeStore>((set, get) => ({
  ...defaultStore,
  setName: (name) => set({ name }),
  setDescription: (description) => set({ description }),
  addIngredientItem: () => {
    const newItem = {
      id: generateID(),
      count: 0,
      food: '',
      type: '',
    };
    set((state) => ({
      ingredients: [...state.ingredients, newItem],
    }));
  },
  addInstruction: () => {
    const instructions = get().instructions;
    const newItem = {
      id: generateID(),
      order: instructions.length,
      description: ``,
      ingredients: [],
    };
    set((state) => ({
      instructions: [...state.instructions, newItem],
    }));
  },
  updateIngredientItem: (item, action) => {
    const ingredients = get().ingredients;
    const index = ingredients.findIndex(({ id }) => id === item.id);
    if (index >= 0) {
      switch (action) {
        case 'copy':
          set({
            ingredients: [
              ...ingredients,
              { ...ingredients[index], id: generateID() },
            ],
          });
          break;
        case 'delete':
          set({
            ingredients: ingredients.filter(({ id }) => id !== item.id),
          });
          break;
        default:
          ingredients[index] = item;
          set({ ingredients });
      }
    }
  },
  updateInstructionItem: (item, action) => {
    const instructions = get().instructions;
    const index = instructions.findIndex(({ id }) => id === item.id);
    if (index >= 0) {
      switch (action) {
        case 'copy':
          set({
            instructions: [
              ...instructions,
              { ...instructions[index], id: generateID() },
            ],
          });
          break;
        case 'delete':
          set({
            instructions: instructions.filter(({ id }) => id !== item.id),
          });
          break;
        default:
          instructions[index] = item;
          set({ instructions });
      }
    }
  },
  clear: () => set(defaultStore),
}));
