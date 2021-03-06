"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _winston = require("winston");

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var env = process.env.NODE_ENV || 'development';
var logDir = 'log'; // Create the log directory if it does not exist

if (!_fs["default"].existsSync(logDir)) {
  _fs["default"].mkdirSync(logDir);
}

var filename = _path["default"].join(logDir, 'results.log');

var logger = (0, _winston.createLogger)({
  // change level if in dev environment versus production
  level: env === 'development' ? 'debug' : 'info',
  format: _winston.format.combine(_winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss'
  }), _winston.format.printf(function (info) {
    return "".concat(info.timestamp, " ").concat(info.level, ": ").concat(info.message);
  })),
  transports: [new _winston.transports.Console({
    level: 'info',
    format: _winston.format.combine(_winston.format.colorize(), _winston.format.printf(function (info) {
      return "".concat(info.timestamp, " ").concat(info.level, ": ").concat(info.message);
    }))
  }), new _winston.transports.File({
    filename: filename
  })]
});
var _default = logger;
exports["default"] = _default;