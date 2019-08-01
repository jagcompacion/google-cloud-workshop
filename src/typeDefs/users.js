import { gql } from "apollo-server";

export default gql`
  type User {
    id: String!
    email: String!
    username: String!
    name: String
    gender: String
    age: String
    role: String!
    isArrived: Boolean!
  }

  input FilterInput {
    isArrived: Boolean
  }

  type Query {
    me: User!
    users(filters: FilterInput!): [User!]
  }

  input MeInput {
    name: String
    gender: String
    age: String
    role: String
    isArrived: Boolean
  }

  type Mutation {
    register(
      username: String!
      email: String!
      password: String!
      name: String
      gender: String
      age: String
    ): User!
    login(username: String!, password: String!): String!
    updateMe(me: MeInput!): User!
  }
`;
