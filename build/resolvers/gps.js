"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

var _gps2 = _interopRequireDefault(require("../db/gps"));

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
    timestamp: item.timestamp,
    latitude: item.latitude,
    longitude: item.longitude,
    altitude: item.altitude,
    heading: item.heading,
    speed: item.speed,
    accuracy: item.accuracy
  };
};

var _default = {
  Query: {
    gps: function () {
      var _gps = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(parent, args, context) {
        var gps;
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
                return _gps2["default"].find({
                  userId: args.userId
                });

              case 4:
                gps = _context.sent;
                return _context.abrupt("return", gps.map(function (item) {
                  return formatResponse(item);
                }));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function gps(_x, _x2, _x3) {
        return _gps.apply(this, arguments);
      }

      return gps;
    }()
  },
  Mutation: {
    createGPS: function () {
      var _createGPS = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(parent, args, context) {
        var input, gps;
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
                input = _objectSpread({
                  userId: context.user.id
                }, args.gps);
                _context2.next = 5;
                return new _gps2["default"](input).save();

              case 5:
                gps = _context2.sent;
                return _context2.abrupt("return", formatResponse(gps));

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createGPS(_x4, _x5, _x6) {
        return _createGPS.apply(this, arguments);
      }

      return createGPS;
    }(),
    removeGPS: function () {
      var _removeGPS = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(parent, args) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _gps2["default"].remove({
                  userId: args.userId
                });

              case 2:
                return _context3.abrupt("return", true);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function removeGPS(_x7, _x8) {
        return _removeGPS.apply(this, arguments);
      }

      return removeGPS;
    }()
  }
};
exports["default"] = _default;