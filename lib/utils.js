'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.responsiveStyle = responsiveStyle;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function responsiveStyle() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  styles.large = styles.large || null;
  styles.medium = styles.medium || null;
  styles.small = styles.small || null;

  if (window.innerWidth >= _config2.default.breakpoints.large) {
    return styles.large;
  }
  if (window.innerWidth >= _config2.default.breakpoints.medium) {
    return styles.medium;
  }
  return styles.small;
};