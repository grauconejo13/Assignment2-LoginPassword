"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var BusinessSchema = new Schema({
  firstName: String,
  lastName: String,
  companyName: String,
  emailAddress: String,
  phoneNumber: String
}, {
  timestamps: true,
  collection: 'contact'
});

var _default = _mongoose["default"].model('Contact', BusinessSchema);

exports["default"] = _default;