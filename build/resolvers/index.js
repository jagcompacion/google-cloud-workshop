"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

var _users = _interopRequireDefault(require("./users"));

var _gps = _interopRequireDefault(require("./gps"));

var _movements = _interopRequireDefault(require("./movements"));

var _beacons = _interopRequireDefault(require("./beacons"));

var _beaconLogs = _interopRequireDefault(require("./beaconLogs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var resolvers = [_users["default"], _movements["default"], _gps["default"], _beacons["default"], _beaconLogs["default"]];

var _default = (0, _mergeGraphqlSchemas.mergeResolvers)(resolvers);

exports["default"] = _default;