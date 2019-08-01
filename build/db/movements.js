"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var schema = new _mongoose.Schema({
  userId: String,
  timestamp: String,
  accelerationX: Number,
  accelerationY: Number,
  accelerationZ: Number,
  gyroX: Number,
  gyroY: Number,
  gyroZ: Number
});
var Movements = (0, _mongoose.model)("Movements", schema);
var _default = Movements;
exports["default"] = _default;