import Recipe from '@/db/models/recipe';
import { Context } from '@/types/graphql';
import { SessionGate } from '@/utils/authGate';
import { UserPermissions } from '@/utils/permissions';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getMyRecipes(_: unknown, {}, context: Context) {
  try {
    const { teamID } = SessionGate(
      context?.session,
      UserPermissions.VIEW_RECIPE,
    );
    const recipes = await Recipe.find({ teamID })
      .populate({ path: 'user' })
      .populate({ path: 'team' });
    return recipes.map((rec) => rec.toJSON());
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default getMyRecipes;
