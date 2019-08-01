"use strict";

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _mongoose = require("mongoose");

var _constants = require("./constants");

var _download = _interopRequireDefault(require("./routes/download"));

var _typeDefs = _interopRequireDefault(require("./typeDefs"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _mongoose.connect)(_constants.MONGO_DB_URI);

var getUser = function getUser(token) {
  if (token) {
    var decoded = _jsonwebtoken["default"].verify(token, _constants.SECRET_KEY);

    if (decoded) return decoded;
  }

  return null;
};

var server = new _apolloServerExpress.ApolloServer({
  typeDefs: _typeDefs["default"],
  resolvers: _resolvers["default"],
  playground: true,
  introspection: true,
  context: function context(_ref) {
    var req = _ref.req;
    var token = req.headers.authorization || "";
    var user = getUser(token);
    return {
      user: user
    };
  }
});
var app = (0, _express["default"])();
app.use(_download["default"]);
server.applyMiddleware({
  app: app
});
var PORT = process.env.PORT || 8080;
app.listen({
  port: PORT
}, function () {
  console.log("\uD83D\uDE80  Server ready at ".concat(PORT));
});