"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  type Beacon {\n    id: String!\n    name: String!\n    latitude: Float!\n    longitude: Float!\n    isLast: Boolean!\n  }\n\n  type Query {\n    beacons: [Beacon!]!\n  }\n\n  input BeaconInput {\n    name: String!\n    latitude: Float!\n    longitude: Float!\n    isLast: Boolean!\n  }\n\n  type Mutation {\n    createBeacon(beacon: BeaconInput!): Beacon!\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _apolloServer.gql)(_templateObject());

exports["default"] = _default;