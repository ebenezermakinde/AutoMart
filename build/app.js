"use strict";

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _winston = _interopRequireDefault(require("./config/winston"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Define our app port.
var port = process.env.PORT || 3500; // Instantiate the app

var app = (0, _express["default"])();
app.get('/', function (req, res) {
  res.send('Welcom to AutoMart');
});
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use((0, _morgan["default"])('combined')); // Set up listening.

app.listen(port, function () {
  _winston["default"].debug("Server is listening on port ".concat(port));
});