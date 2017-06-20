'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getViewport = getViewport;

var _constants = require('../constants');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getViewport(width) {
  if (width >= _config2.default.breakpoints[_constants.LARGE]) {
    return _constants.LARGE;
  }

  if (width >= _config2.default.breakpoints[_constants.MEDIUM]) {
    return _constants.MEDIUM;
  }

  return _constants.SMALL;
}