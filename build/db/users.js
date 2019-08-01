"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var schema = new _mongoose.Schema({
  username: String,
  name: String,
  gender: String,
  age: String,
  email: String,
  password: String,
  role: String,
  isArrived: Boolean
});
var Users = (0, _mongoose.model)("Users", schema);
var _default = Users;
exports["default"] = _default;