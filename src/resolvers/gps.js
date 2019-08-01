import { AuthenticationError } from "apollo-server";
import GPS from "../db/gps";

const formatResponse = item => ({
  id: item._id.toString(), //eslint-disable-line
  timestamp: item.timestamp,
  latitude: item.latitude,
  longitude: item.longitude,
  altitude: item.altitude,
  heading: item.heading,
  speed: item.speed,
  accuracy: item.accuracy
});

export default {
  Query: {
    gps: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError("Must authenticate");
      const gps = await GPS.find({ userId: args.userId });
      return gps.map(item => formatResponse(item));
    }
  },
  Mutation: {
    createGPS: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError("Must authenticate");
      const input = {
        userId: context.user.id,
        ...args.gps
      };
      const gps = await new GPS(input).save();
      return formatResponse(gps);
    },
    removeGPS: async (parent, args) => {
      await GPS.remove({ userId: args.userId });
      return true;
    }
  }
};
