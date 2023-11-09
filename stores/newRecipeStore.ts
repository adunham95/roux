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
  addIngredientItem: (instructionID: string) => void;
  addInstruction: () => void;
  updateIngredientItem: (
    instructionID: string,
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
  addIngredientItem: (instructionID) => {
    const instructions = get().instructions;
    const index = instructions.findIndex(({ id }) => id === instructionID);
    const newItem = {
      id: generateID(),
      count: 0,
      food: '',
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
      id: generateID(),
      order: instructions.length,
      description: ``,
      ingredients: [],
    };
    set((state) => ({
      instructions: [...state.instructions, newItem],
    }));
  },
  updateIngredientItem: (instructionID, item, action) => {
    console.log(instructionID);
    const instructions = get().instructions;
    const instruction = instructions.find(({ id }) => id === instructionID);
    const instructionIndex = instructions.findIndex(
      ({ id }) => id === instructionID,
    );
    console.log(instructionIndex);
    if (instructionIndex < 0) {
      return false;
    }
    let ingredients = instruction?.ingredients || [];
    const index = ingredients.findIndex(({ id }) => id === item.id);

    if (index >= 0) {
      switch (action) {
        case 'copy':
          ingredients = [
            ...ingredients,
            { ...ingredients[index], id: generateID() },
          ];
          break;
        case 'delete':
          ingredients = ingredients.filter(({ id }) => id !== item.id);
          break;
        default:
          ingredients[index] = item;
      }
    }
    instructions[instructionIndex].ingredients = ingredients;
    set({ instructions });
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
              {
                ...instructions[index],
                order: instructions.length,
                id: generateID(),
              },
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
