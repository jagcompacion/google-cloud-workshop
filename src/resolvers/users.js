import jwt from "jsonwebtoken";
import { AuthenticationError } from "apollo-server";
import Users from "../db/users";
import { SECRET_KEY } from "../constants";

const formatResponse = item => ({
  id: item._id.toString(), //eslint-disable-line
  name: item.name,
  username: item.username,
  role: item.role,
  gender: item.gender,
  age: item.age,
  email: item.email,
  isArrived: item.isArrived
});

export default {
  Query: {
    me: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError("Must authenticate");
      const found = await Users.findOne({ _id: context.user.id });
      return formatResponse(found);
    },
    users: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError("Must authenticate");
      const filterInput = {
        role: { $ne: "admin" },
        ...args.filters
      };
      const users = await Users.find(filterInput);
      return users.map(item => formatResponse(item));
    }
  },
  Mutation: {
    register: async (parent, args) => {
      const newArgs = {
        ...args,
        role: "user",
        isArrived: false
      };
      const user = await new Users(newArgs).save();
      return formatResponse(user);
    },
    login: async (parent, args) => {
      const found = await Users.findOne({
        username: args.username,
        password: args.password
      });
      if (found) {
        const user = {
          id: found._id, // eslint-disable-line
          username: found.username
        };
        const token = jwt.sign(user, SECRET_KEY);
        return token;
      }
      throw new AuthenticationError("Incorrect username/password");
    },

    updateMe: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError("Must authenticate");
      const user = await Users.findOneAndUpdate(
        { _id: context.user.id },
        { $set: { ...args.me } }
      );
      return formatResponse(user);
    }
  }
};
