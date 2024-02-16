interface RecipeHistory {
  add: string[];
  update: { [key: string]: unknown };
  delete: string[];
}

interface RecipeHistoryArray {
  id: string;
  createdAt: string;
  recipe?: Recipe;
  user: BaseUser;
}
