import { gql } from "apollo-server";

export default gql`
  type GPS {
    id: String!
    timestamp: String!
    latitude: Float!
    longitude: Float!
    altitude: Float!
    heading: Float!
    speed: Float!
    accuracy: Float!
  }

  type Query {
    gps(userId: ID!): [GPS!]!
  }

  input GPSInput {
    timestamp: String!
    latitude: Float!
    longitude: Float!
    altitude: Float!
    heading: Float!
    speed: Float!
    accuracy: Float!
  }

  type Mutation {
    createGPS(gps: GPSInput!): GPS!
    removeGPS(userId: ID!): Boolean!
  }
`;
