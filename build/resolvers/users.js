"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _apolloServer = require("apollo-server");

var _users2 = _interopRequireDefault(require("../db/users"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var formatResponse = function formatResponse(item) {
  return {
    id: item._id.toString(),
    //eslint-disable-line
    name: item.name,
    username: item.username,
    role: item.role,
    gender: item.gender,
    age: item.age,
    email: item.email,
    isArrived: item.isArrived
  };
};

var _default = {
  Query: {
    me: function () {
      var _me = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(parent, args, context) {
        var found;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (context.user) {
                  _context.next = 2;
                  break;
                }

                throw new _apolloServer.AuthenticationError("Must authenticate");

              case 2:
                _context.next = 4;
                return _users2["default"].findOne({
                  _id: context.user.id
                });

              case 4:
                found = _context.sent;
                return _context.abrupt("return", formatResponse(found));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function me(_x, _x2, _x3) {
        return _me.apply(this, arguments);
      }

      return me;
    }(),
    users: function () {
      var _users = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(parent, args, context) {
        var filterInput, users;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (context.user) {
                  _context2.next = 2;
                  break;
                }

                throw new _apolloServer.AuthenticationError("Must authenticate");

              case 2:
                filterInput = _objectSpread({
                  role: {
                    $ne: "admin"
                  }
                }, args.filters);
                _context2.next = 5;
                return _users2["default"].find(filterInput);

              case 5:
                users = _context2.sent;
                return _context2.abrupt("return", users.map(function (item) {
                  return formatResponse(item);
                }));

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function users(_x4, _x5, _x6) {
        return _users.apply(this, arguments);
      }

      return users;
    }()
  },
  Mutation: {
    register: function () {
      var _register = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(parent, args) {
        var newArgs, user;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                newArgs = _objectSpread({}, args, {
                  role: "user",
                  isArrived: false
                });
                _context3.next = 3;
                return new _users2["default"](newArgs).save();

              case 3:
                user = _context3.sent;
                return _context3.abrupt("return", formatResponse(user));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function register(_x7, _x8) {
        return _register.apply(this, arguments);
      }

      return register;
    }(),
    login: function () {
      var _login = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(parent, args) {
        var found, user, token;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _users2["default"].findOne({
                  username: args.username,
                  password: args.password
                });

              case 2:
                found = _context4.sent;

                if (!found) {
                  _context4.next = 7;
                  break;
                }

                user = {
                  id: found._id,
                  // eslint-disable-line
                  username: found.username
                };
                token = _jsonwebtoken["default"].sign(user, _constants.SECRET_KEY);
                return _context4.abrupt("return", token);

              case 7:
                throw new _apolloServer.AuthenticationError("Incorrect username/password");

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function login(_x9, _x10) {
        return _login.apply(this, arguments);
      }

      return login;
    }(),
    updateMe: function () {
      var _updateMe = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(parent, args, context) {
        var user;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (context.user) {
                  _context5.next = 2;
                  break;
                }

                throw new _apolloServer.AuthenticationError("Must authenticate");

              case 2:
                _context5.next = 4;
                return _users2["default"].findOneAndUpdate({
                  _id: context.user.id
                }, {
                  $set: _objectSpread({}, args.me)
                });

              case 4:
                user = _context5.sent;
                return _context5.abrupt("return", formatResponse(user));

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function updateMe(_x11, _x12, _x13) {
        return _updateMe.apply(this, arguments);
      }

      return updateMe;
    }()
  }
};
exports["default"] = _default;