interface RecipeHistory {
  [key: string]: string;
}

interface RecipeHistoryObject {
  action?: string;
  displayName?: string;
  [key: string]: object;
}

interface RecipeHistoryArray {
  id: string;
  createdAt: string;
  recipe?: Recipe;
  user: BaseUser;
  elements: RecipeHistory[];
  changelog: string[];
  type: 'CREATE' | 'UPDATE';
}
