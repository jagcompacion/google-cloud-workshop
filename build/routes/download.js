"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _json2csv = require("json2csv");

var _movements = _interopRequireDefault(require("../db/movements"));

var _gps = _interopRequireDefault(require("../db/gps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router();

var formatResponse = function formatResponse(item) {
  return {
    id: item._id.toString(),
    //eslint-disable-line
    timestamp: item.timestamp,
    accelerationX: item.accelerationX,
    accelerationY: item.accelerationY,
    accelerationZ: item.accelerationZ,
    gyroX: item.gyroX,
    gyroY: item.gyroY,
    gyroZ: item.gyroZ
  };
};

var formatGPSResponse = function formatGPSResponse(item) {
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

router.get("/download-movements/:id",
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var movements, csvString;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _movements["default"].find({
              userId: req.params.id
            });

          case 2:
            movements = _context.sent;
            csvString = (0, _json2csv.parse)(movements.map(function (item) {
              return formatResponse(item);
            }));
            res.setHeader("Content-disposition", "attachment; filename=movements.csv");
            res.set("Content-Type", "text/csv");
            res.status(200).send(csvString);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get("/download-gps/:id",
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var gps, csvString;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _gps["default"].find({
              userId: req.params.id
            });

          case 2:
            gps = _context2.sent;
            csvString = (0, _json2csv.parse)(gps.map(function (item) {
              return formatGPSResponse(item);
            }));
            res.setHeader("Content-disposition", "attachment; filename=gps.csv");
            res.set("Content-Type", "text/csv");
            res.status(200).send(csvString);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;