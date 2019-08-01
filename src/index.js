import "@babel/polyfill";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import jwt from "jsonwebtoken";
import { connect } from "mongoose";
import { SECRET_KEY, MONGO_DB_URI } from "./constants";
import downloadRoute from "./routes/download";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

connect(MONGO_DB_URI);

const getUser = token => {
  if (token) {
    const decoded = jwt.verify(token, SECRET_KEY);
    if (decoded) return decoded;
  }
  return null;
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  context: ({ req }) => {
    const token = req.headers.authorization || "";
    const user = getUser(token);
    return { user };
  }
});

const app = express();
app.use(downloadRoute);
server.applyMiddleware({ app });
const PORT = process.env.PORT || 8080;

app.listen({ port: PORT }, () => {
  console.log(`🚀  Server ready at ${PORT}`);
});
