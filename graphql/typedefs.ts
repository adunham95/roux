import { gql } from 'graphql-tag';
import { createUserTypeDefs } from './mutations/createUser';
import { updateUserTypeDefs } from './mutations/updateUser';
import { createMembershipTierTypeDefs } from './mutations/createMembershipTier';
import { createRecipeTypeDefs } from './mutations/createRecipe';
import { updateRecipeTypeDefs } from './mutations/updateRecipe';

const typeDefs = gql`
  scalar JSON
  # User
  type BaseUser {
    id: ID
    firstName: String
    lastName: String
    email: String
    createdAt: String
    updatedAt: String
    status: String
  }
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    createdAt: String
    updatedAt: String
    status: String
    teamRoles: [TeamRole]
  }
  # Team
  type TeamRole {
    roleID: ID!
    userID: ID!
    teamID: ID!
  }
  type Team {
    id: ID!
    name: String
  }
  #Recipe
  type RecipeUpdateHistory {
    key: String
    value: String
  }
  type BaseRecipe {
    id: ID!
    userID: ID!
    team: Team
    teamID: ID!
    user: BaseUser
    name: String!
    servings: Int
    description: String
    instructions: [Instruction]
    ingredients: [Ingredient]
  }

  type RecipeHistory {
    id: ID
    user: User
    type: String
    recipe: BaseRecipe
    elements: [RecipeUpdateHistory]
    createdAt: String
    updatedAt: String
    changelog: [String]
  }
  type Ingredient {
    instructionRefId: String!
    refId: String!
    name: String!
    type: String
    count: Int!
  }

  type Instruction {
    refId: String!
    description: String!
    order: Int!
  }

  type Recipe {
    id: ID!
    userID: ID!
    team: Team
    teamID: ID!
    user: BaseUser
    name: String!
    servings: Int
    description: String
    instructions: [Instruction]
    ingredients: [Ingredient]
    history: [RecipeHistory]
    createdAt: String
    updatedAt: String
  }
  #MembershipTier
  type MembershipTierPricing {
    name: String
    permissions: [String]
    locked: Boolean
  }
  type MembershipTierFeatures {
    title: String
    description: String
  }
  type MembershipTier {
    id: ID!
    tierName: String
    tierDescription: String
    features: [MembershipTierFeatures]
    maxTeamSize: Int
    maxRecipeCount: Int
    yearlyCost: Int
    monthlyCost: Int
    visible: Boolean
    default: Boolean
    defaultPermission: MembershipTierPricing
  }

  #BetaToken
  type BetaToken {
    id: ID!
    token: String!
    redeemed: Boolean
  }

  ${createUserTypeDefs}
  ${updateUserTypeDefs}
  ${createMembershipTierTypeDefs}
  ${createRecipeTypeDefs}
  ${updateRecipeTypeDefs}

  type Success {
    success: Boolean
  }

  type PasswordReset {
    success: Boolean
    resetLink: String
  }

  type Query {
    #Recipe
    getRecipe(id: ID!): Recipe
    getMyRecipes: [Recipe]
    getRecipesByTeam(teamID: ID!): [Recipe]
    getRecipeHistory(id: ID!): [RecipeHistory]
    #MembershipTier
    getMembershipTiers(onlyVisible: Boolean): [MembershipTier]
    #Users
    getUserById(id: ID!): User
    #BetaTokens
    getAllBetaTokens: [BetaToken]
    #Team
    getTeam(teamID: ID!): Team
  }

  type Mutation {
    #Recipe
    createRecipe(input: CreateRecipeInput): Recipe
    updateRecipe(
      recipe: CreateRecipeInput
      id: String
      elements: [UpdateRecipeElementsInput]
    ): Recipe
    #MembershipTiers
    createMembershipTier(input: CreateMembershipTierInput): MembershipTier
    #BetaTokens
    generateBetaTokens(count: Int): [BetaToken]
    #Users
    createUser(input: CreateUserInput!, teamID: String, roleID: String): Success
    updateUser(input: UpdateUserInput): User
    forgotPassword(email: String!): PasswordReset
    resetPassword(resetCode: String!, newPassword: String!): Boolean
  }
`;

export default typeDefs;
