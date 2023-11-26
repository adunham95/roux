import { IIngredientItem } from './ingredinetItem';

interface IInstructionItem {
  refId: string;
  order: number;
  description: string;
  ingredients: IIngredientItem[];
}
