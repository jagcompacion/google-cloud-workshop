"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

var _beacons2 = _interopRequireDefault(require("../db/beacons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var formatResponse = function formatResponse(item) {
  return {
    id: item._id.toString(),
    //eslint-disable-line
    name: item.name,
    latitude: item.latitude,
    longitude: item.longitude,
    isLast: item.isLast
  };
};

var _default = {
  Query: {
    beacons: function () {
      var _beacons = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(parent, args, context) {
        var beacons;
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
                return _beacons2["default"].find();

              case 4:
                beacons = _context.sent;
                return _context.abrupt("return", beacons.map(function (item) {
                  return formatResponse(item);
                }));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function beacons(_x, _x2, _x3) {
        return _beacons.apply(this, arguments);
      }

      return beacons;
    }()
  },
  Mutation: {
    createBeacon: function () {
      var _createBeacon = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(parent, args, context) {
        var beacon;
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
                _context2.next = 4;
                return new _beacons2["default"](args.beacon).save();

              case 4:
                beacon = _context2.sent;
                return _context2.abrupt("return", formatResponse(beacon));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createBeacon(_x4, _x5, _x6) {
        return _createBeacon.apply(this, arguments);
      }

      return createBeacon;
    }()
  }
};
exports["default"] = _default;