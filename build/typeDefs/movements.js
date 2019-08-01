"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  type Movement {\n    id: String!\n    timestamp: String!\n    accelerationX: Float!\n    accelerationY: Float!\n    accelerationZ: Float!\n    gyroX: Float!\n    gyroY: Float!\n    gyroZ: Float!\n  }\n\n  type Query {\n    movements(userId: ID!): [Movement!]!\n  }\n\n  input MovementInput {\n    timestamp: String!\n    accelerationX: Float!\n    accelerationY: Float!\n    accelerationZ: Float!\n    gyroX: Float!\n    gyroY: Float!\n    gyroZ: Float!\n  }\n\n  type Mutation {\n    createMovements(movements: [MovementInput!]!): [Movement!]!\n    removeMovements(userId: ID!): Boolean!\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _apolloServer.gql)(_templateObject());

exports["default"] = _default;