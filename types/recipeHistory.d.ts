interface RecipeHistory {
  add: string[];
  update: { [key: string]: unknown };
  delete: string[];
}
