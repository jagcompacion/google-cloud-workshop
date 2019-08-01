"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var schema = new _mongoose.Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  isLast: Boolean
});
var Beacons = (0, _mongoose.model)("Beacons", schema);
var _default = Beacons;
exports["default"] = _default;