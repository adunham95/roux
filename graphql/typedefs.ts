import { gql } from 'graphql-tag';
import { createUserTypeDefs } from './mutations/createUser';
import { updateUserTypeDefs } from './mutations/updateUser';
import { createMembershipTierTypeDefs } from './mutations/createMembershipTier';
import { createRecipeTypeDefs } from './mutations/createRecipe';
import { createRecipeHistoryTypeDefs } from './mutations/createRecipeHistory';
import { loginUserTypeDefs } from './mutations/login';

const typeDefs = gql`
  scalar JSON
  # User
  type BaseUser {
    userId: ID
    firstName: String
    lastName: String
    email: String
    createdAt: String
    updatedAt: String
    status: String
  }
  type User {
    userId: ID
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
    access: Access
  }
  type Access {
    id: ID!
    name: String!
    permissions: [String!]
    locked: Boolean!
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
  type RecipeHistory {
    add: [String]
    delete: [String]
    update: [RecipeUpdateHistory]
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

  ${loginUserTypeDefs}
  ${createUserTypeDefs}
  ${updateUserTypeDefs}
  ${createMembershipTierTypeDefs}
  ${createRecipeTypeDefs}
  ${createRecipeHistoryTypeDefs}

  type Success {
    success: Boolean
  }

  type PasswordReset {
    success: Boolean
    resetLink: String
  }

  type Session {
    user: User
    sessionId: String
    state: String
    fresh: Boolean
  }

  type Query {
    #Recipe
    getRecipe(id: ID!): Recipe
    getMyRecipes: [Recipe]
    #MembershipTier
    getMembershipTiers(onlyVisible: Boolean): [MembershipTier]
    #Users
    logout: Success
    getUserById(id: ID!): User
    getViewer: Session
    #BetaTokens
    getAllBetaTokens: [BetaToken]
  }

  type Mutation {
    #Recipe
    createRecipe(input: CreateRecipeInput): Recipe
    updateRecipe(recipe: CreateRecipeInput, id: String): Recipe
    createRecipeHistory(input: CreateRecipeHistory, id: String): RecipeHistory
    #MembershipTiers
    createMembershipTier(input: CreateMembershipTierInput): MembershipTier
    #BetaTokens
    generateBetaTokens(count: Int): [BetaToken]
    #Users
    login(email: String!, password: String!): Session
    createUser(input: CreateUserInput!, teamID: String, roleID: String): Success
    updateUser(input: UpdateUserInput): User
    forgotPassword(email: String!): PasswordReset
    resetPassword(resetCode: String!, newPassword: String!): Boolean
  }
`;

export default typeDefs;
