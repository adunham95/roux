import { gql } from 'graphql-tag';
import { createUserTypeDefs } from './mutations/createUser';
import { updateUserTypeDefs } from './mutations/updateUser';

const typeDefs = gql`
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

  type Query {
    #Products
    getProducts: [Product]
    getProduct(id: ID!): Product
    #Users
    getUserById(id: ID!): User
    #BetaTokens
    getAllBetaTokens: [BetaToken]
  }

  type Mutation {
    #BetaTokens
    generateBetaTokens(count: Int): [BetaToken]
    #Users
    createUser(input: CreateUserInput): User
    updateUser(input: UpdateUserInput): User
    #Products
    newProduct(input: ProductInput): Product
    updateProduct(id: ID!, input: ProductInput): Product
    deleteProduct(id: ID!): String
  }
`;

export default typeDefs;
