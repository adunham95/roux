import createUser from './mutations/createUser';
import updateUser from './mutations/updateUser';
import getUserById from './queries/getUserById';
import generateBetaTokens from './mutations/generateBetaTokens';
import getAllBetaTokens from './queries/getBetaTokens';
import createMembershipTier from './mutations/createMembershipTier';
import getMembershipTiers from './queries/getMembershipTiers';
import createRecipe from './mutations/createRecipe';
import getRecipe from './queries/getRecipe';
import forgotPassword from './mutations/forgotPassword';
import resetPassword from './mutations/resetPassword';
import getMyRecipes from './queries/getMyRecipes';
import updateRecipe from './mutations/updateRecipe';
import createRecipeHistory from './mutations/createRecipeHistory';

const resolvers = {
  Query: {
    getUserById,
    getAllBetaTokens,
    getMembershipTiers,
    getRecipe,
    getMyRecipes,
  },

  Mutation: {
    createUser,
    updateUser,
    generateBetaTokens,
    createMembershipTier,
    createRecipe,
    forgotPassword,
    resetPassword,
    updateRecipe,
    createRecipeHistory,
  },
};

export default resolvers;
