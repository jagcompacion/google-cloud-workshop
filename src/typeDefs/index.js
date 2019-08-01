import { mergeTypes } from "merge-graphql-schemas";

import movements from "./movements";
import users from "./users";
import gps from "./gps";
import beacons from "./beacons";
import beaconLogs from "./beaconLogs";

const typeDefs = [users, movements, gps, beacons, beaconLogs];

export default mergeTypes(typeDefs, { all: true });
