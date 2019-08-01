"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

var _beaconLogs2 = _interopRequireDefault(require("../db/beaconLogs"));

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
    rssi: item.rssi,
    timestamp: item.timestamp
  };
};

var _default = {
  Query: {
    beaconLogs: function () {
      var _beaconLogs = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(parent, args, context) {
        var beaconLogs;
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
                return _beaconLogs2["default"].find({
                  userId: args.userId
                });

              case 4:
                beaconLogs = _context.sent;
                return _context.abrupt("return", beaconLogs.map(function (item) {
                  return formatResponse(item);
                }));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function beaconLogs(_x, _x2, _x3) {
        return _beaconLogs.apply(this, arguments);
      }

      return beaconLogs;
    }()
  },
  Mutation: {
    createBeaconLog: function () {
      var _createBeaconLog = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(parent, args, context) {
        var newBeaconLog, beaconLog;
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
                newBeaconLog = _objectSpread({
                  userId: context.user.id
                }, args.beaconLog, {
                  timestamp: new Date().getTime()
                });
                _context2.next = 5;
                return (0, _beaconLogs2["default"])(newBeaconLog).findOneAndUpdate({
                  name: args.beaconLog.name
                }, {
                  $set: newBeaconLog
                }, {
                  upsert: true
                });

              case 5:
                beaconLog = _context2.sent;
                return _context2.abrupt("return", formatResponse(beaconLog));

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createBeaconLog(_x4, _x5, _x6) {
        return _createBeaconLog.apply(this, arguments);
      }

      return createBeaconLog;
    }()
  }
};
exports["default"] = _default;