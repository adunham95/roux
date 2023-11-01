import { gql } from 'graphql-tag';
import { createUserTypeDefs } from './mutations/createUser';

const typeDefs = gql`
  # User
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    createAt: String
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

  type Query {
    getProducts: [Product]
    getProduct(id: ID!): Product
  }

  type Mutation {
    createUser(input: CreateUserInput): User
    #Products
    newProduct(input: ProductInput): Product
    updateProduct(id: ID!, input: ProductInput): Product
    deleteProduct(id: ID!): String
  }
`;

export default typeDefs;
