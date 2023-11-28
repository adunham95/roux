interface RecipeHistory {
  add: string[];
  update: { [key: string]: unknown };
  delete: string[];
}

interface RecipeHistoryArray {
  add: string[];
  update: { key: string; value: unknown }[];
  delete: string[];
}
