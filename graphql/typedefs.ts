import { gql } from 'graphql-tag';
import { createUserTypeDefs } from './mutations/createUser';
import { updateUserTypeDefs } from './mutations/updateUser';
import { createMembershipTierTypeDefs } from './mutations/createMembershipTier';
import { createRecipeTypeDefs } from './mutations/createRecipe';

const typeDefs = gql`
  #Recipe
  type Ingredient {
    id: ID!
    name: String!
    type: String
    count: Int!
  }

  type Instruction {
    id: ID!
    description: String!
    order: Int!
    ingredients: [Ingredient]
  }

  type Recipe {
    id: ID!
    name: String!
    description: String
    instructions: [Instruction]
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
  type TeamRole {
    roleID: ID!
    userID: ID!
    teamID: ID!
  }
  #BetaToken
  type BetaToken {
    id: ID!
    token: String!
    redeemed: Boolean
  }
  # User
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

  # Products
  type Product {
    id: ID
    name: String
    productionCapacity: Int
    price: Float
    description: String
  }

  input ProductInput {
    name: String!
    productionCapacity: Int!
    price: Float!
    description: String
  }

  ${createUserTypeDefs}
  ${updateUserTypeDefs}
  ${createMembershipTierTypeDefs}
  ${createRecipeTypeDefs}

  type Query {
    #MembershipTier
    getMembershipTiers(onlyVisible: Boolean): [MembershipTier]
    #Products
    getProducts: [Product]
    getProduct(id: ID!): Product
    #Users
    getUserById(id: ID!): User
    #BetaTokens
    getAllBetaTokens: [BetaToken]
  }

  type Mutation {
    #Recipe
    createRecipe(input: CreateRecipeInput): Recipe
    #MembershipTiers
    createMembershipTier(input: CreateMembershipTierInput): MembershipTier
    #BetaTokens
    generateBetaTokens(count: Int): [BetaToken]
    #Users
    createUser(input: CreateUserInput!, teamID: String): User
    updateUser(input: UpdateUserInput): User
    #Products
    newProduct(input: ProductInput): Product
    updateProduct(id: ID!, input: ProductInput): Product
    deleteProduct(id: ID!): String
  }
`;

export default typeDefs;
