import { AuthenticationError } from "apollo-server";
import Movements from "../db/movements";

const formatResponse = item => ({
  id: item._id.toString(), //eslint-disable-line
  timestamp: item.timestamp,
  accelerationX: item.accelerationX,
  accelerationY: item.accelerationY,
  accelerationZ: item.accelerationZ,
  gyroX: item.gyroX,
  gyroY: item.gyroY,
  gyroZ: item.gyroZ
});

export default {
  Query: {
    movements: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError("Must authenticate");
      const movements = await Movements.find({ userId: args.userId });
      return movements.map(item => formatResponse(item));
    }
  },
  Mutation: {
    createMovements: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError("Must authenticate");
      const newMovements = await Promise.all(
        args.movements.map(async item => {
          const input = {
            userId: context.user.id,
            ...item
          };
          return Promise.resolve(await new Movements(input).save());
        })
      );
      return newMovements.map(item => formatResponse(item));
    },
    removeMovements: async (parent, args) => {
      await Movements.remove({ userId: args.userId });
      return true;
    }
  }
};
