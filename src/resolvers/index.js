import { mergeResolvers } from "merge-graphql-schemas";
import users from "./users";
import gps from "./gps";
import movements from "./movements";
import beacons from "./beacons";
import beaconLogs from "./beaconLogs";

const resolvers = [users, movements, gps, beacons, beaconLogs];

export default mergeResolvers(resolvers);
