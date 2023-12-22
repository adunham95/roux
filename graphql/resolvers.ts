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

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    getUserById,
    getAllBetaTokens,
    getMembershipTiers,
    getRecipe,
    getMyRecipes,
    getViewer,
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
