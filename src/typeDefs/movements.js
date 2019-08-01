import { gql } from "apollo-server";

export default gql`
  type Movement {
    id: String!
    timestamp: String!
    accelerationX: Float!
    accelerationY: Float!
    accelerationZ: Float!
    gyroX: Float!
    gyroY: Float!
    gyroZ: Float!
  }

  type Query {
    movements(userId: ID!): [Movement!]!
  }

  input MovementInput {
    timestamp: String!
    accelerationX: Float!
    accelerationY: Float!
    accelerationZ: Float!
    gyroX: Float!
    gyroY: Float!
    gyroZ: Float!
  }

  type Mutation {
    createMovements(movements: [MovementInput!]!): [Movement!]!
    removeMovements(userId: ID!): Boolean!
  }
`;
