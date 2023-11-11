import { IIngredientItem } from './ingredinetItem';

interface IInstructionItem {
  id?: string;
  order: number;
  description: string;
  ingredients: IIngredientItem[];
}
