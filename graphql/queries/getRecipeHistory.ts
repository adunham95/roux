import recipeHistory from '@/db/models/recipeHistory';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getRecipeHistory(_: unknown, { id }: { id: string }) {
  try {
    const history = await recipeHistory
      .find({ recipeID: id })
      .populate({ path: 'user' });
    return history.map((hist) => hist.toJSON());
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default getRecipeHistory;
