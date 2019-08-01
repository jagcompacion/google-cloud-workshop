import { AuthenticationError } from "apollo-server";
import BeaconLogs from "../db/beaconLogs";

const formatResponse = item => ({
  id: item._id.toString(), //eslint-disable-line
  name: item.name,
  rssi: item.rssi,
  timestamp: item.timestamp
});

export default {
  Query: {
    beaconLogs: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError("Must authenticate");
      const beaconLogs = await BeaconLogs.find({ userId: args.userId });
      return beaconLogs.map(item => formatResponse(item));
    }
  },
  Mutation: {
    createBeaconLog: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError("Must authenticate");
      const newBeaconLog = {
        userId: context.user.id,
        ...args.beaconLog,
        timestamp: new Date().getTime(),
      };
      const beaconLog = await BeaconLogs(newBeaconLog).findOneAndUpdate(
        { name: args.beaconLog.name },
        { $set: newBeaconLog },
        { upsert: true }
      );
      return formatResponse(beaconLog);
    }
  }
};
