import { gql } from "apollo-server";

export default gql`
  type BeaconLog {
    id: String!
    name: String!
    rssi: Float!
    timestamp: String!
  }

  type Query {
    beaconLogs(userId: ID!): [BeaconLog!]!
  }

  input BeaconLogInput {
    name: String!
    rssi: Float!
  }

  type Mutation {
    createBeaconLog(beaconLog: BeaconLogInput!): BeaconLog!
  }
`;
