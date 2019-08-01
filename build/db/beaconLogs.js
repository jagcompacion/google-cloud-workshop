"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var schema = new _mongoose.Schema({
  userId: String,
  name: String,
  rssi: Number,
  timestamp: String
});
var BeaconLogs = (0, _mongoose.model)("BeaconLogs", schema);
var _default = BeaconLogs;
exports["default"] = _default;