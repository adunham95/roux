import { IInstructionItem } from '@/types/instructionItem';
import { IIngredientItem } from './ingredinetItem';

export interface IRecipe {
  id: string;
  name: string;
  description?: string;
  image?: string;
  serving?: number;
  user?: BaseUser;
  team?: Team;
  instructions: IInstructionItem[];
  ingredients: IIngredientItem[];
  categoryIds: string[];
  history: RecipeHistoryArray[];
}
