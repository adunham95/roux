import Recipe from '@/db/models/recipe';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getRecipesByTeam(_: unknown, { teamID }: { teamID: string }) {
  try {
    const recipes = await Recipe.find({ teamID });
    return recipes.map((rec) => rec.toJSON());
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default getRecipesByTeam;
