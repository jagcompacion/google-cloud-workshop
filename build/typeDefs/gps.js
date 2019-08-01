"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  type GPS {\n    id: String!\n    timestamp: String!\n    latitude: Float!\n    longitude: Float!\n    altitude: Float!\n    heading: Float!\n    speed: Float!\n    accuracy: Float!\n  }\n\n  type Query {\n    gps(userId: ID!): [GPS!]!\n  }\n\n  input GPSInput {\n    timestamp: String!\n    latitude: Float!\n    longitude: Float!\n    altitude: Float!\n    heading: Float!\n    speed: Float!\n    accuracy: Float!\n  }\n\n  type Mutation {\n    createGPS(gps: GPSInput!): GPS!\n    removeGPS(userId: ID!): Boolean!\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _apolloServer.gql)(_templateObject());

exports["default"] = _default;