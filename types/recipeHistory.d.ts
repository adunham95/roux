interface RecipeHistory {
  add: string[];
  update: { [key: string]: unknown };
  delete: string[];
}

interface RecipeHistoryArray {
  id: string;
  createdAt: string;
  add: string[];
  update: { key: string; value: unknown }[];
  delete: string[];
  user: BaseUser;
}
