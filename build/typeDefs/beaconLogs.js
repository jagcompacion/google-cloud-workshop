"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  type BeaconLog {\n    id: String!\n    name: String!\n    rssi: Float!\n    timestamp: String!\n  }\n\n  type Query {\n    beaconLogs(userId: ID!): [BeaconLog!]!\n  }\n\n  input BeaconLogInput {\n    name: String!\n    rssi: Float!\n  }\n\n  type Mutation {\n    createBeaconLog(beaconLog: BeaconLogInput!): BeaconLog!\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _apolloServer.gql)(_templateObject());

exports["default"] = _default;