"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var schema = new _mongoose.Schema({
  userId: String,
  timestamp: String,
  latitude: Number,
  longitude: Number,
  altitude: Number,
  heading: Number,
  speed: Number,
  accuracy: Number
});
var GPS = (0, _mongoose.model)("GPS", schema);
var _default = GPS;
exports["default"] = _default;