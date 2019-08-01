import { gql } from "apollo-server";

export default gql`
  type Beacon {
    id: String!
    name: String!
    latitude: Float!
    longitude: Float!
    isLast: Boolean!
  }

  type Query {
    beacons: [Beacon!]!
  }

  input BeaconInput {
    name: String!
    latitude: Float!
    longitude: Float!
    isLast: Boolean!
  }

  type Mutation {
    createBeacon(beacon: BeaconInput!): Beacon!
  }
`;
