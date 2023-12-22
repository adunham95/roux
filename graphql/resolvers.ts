import GraphQLJSON from 'graphql-type-json';
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
import getViewer from './queries/viewer';
import login from './mutations/login';
import logout from './queries/logout';

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    getUserById,
    getAllBetaTokens,
    getMembershipTiers,
    getRecipe,
    getMyRecipes,
    getViewer,
    logout,
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
    login,
  },
};

export default resolvers;
