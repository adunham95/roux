import { IInstructionItem } from '@/types/instructionItem';

export interface IRecipe {
  name: string;
  description?: string;
  image?: string;
  serving?: number;
  user?: BaseUser;
  team?: Team;
  instructions: IInstructionItem[];
  categoryIds: string[];
}
