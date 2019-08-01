import { AuthenticationError } from "apollo-server";
import Beacons from "../db/beacons";

const formatResponse = item => ({
  id: item._id.toString(), //eslint-disable-line
  name: item.name,
  latitude: item.latitude,
  longitude: item.longitude,
  isLast: item.isLast
});

export default {
  Query: {
    beacons: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError("Must authenticate");
      const beacons = await Beacons.find();
      return beacons.map(item => formatResponse(item));
    }
  },
  Mutation: {
    createBeacon: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError("Must authenticate");
      const beacon = await new Beacons(args.beacon).save();
      return formatResponse(beacon);
    }
  }
};
