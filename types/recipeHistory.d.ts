interface RecipeHistory {
  [key: string]: unknown;
}

interface RecipeHistoryArray {
  id: string;
  createdAt: string;
  recipe?: Recipe;
  user: BaseUser;
  elements: RecipeHistory[];
}
