'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _constants = require('../constants');

var _responsive = require('../responsive');

var _responsive2 = _interopRequireDefault(_responsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Col = function Col(_ref) {
  var children = _ref.children,
      small = _ref.small,
      medium = _ref.medium,
      large = _ref.large,
      cols = _ref.cols,
      sizes = _ref.sizes;

  var styles = {};

  styles[_constants.BASE] = {
    boxSizing: 'border-box',
    padding: _config2.default.gutter
  };

  styles[_constants.SMALL] = {
    flex: '0 0 ' + (sizes[0] || small) * 100 / cols + '%'
  };

  styles[_constants.MEDIUM] = {
    flex: '0 0 ' + (sizes[1] || medium) * 100 / cols + '%'
  };

  styles[_constants.LARGE] = {
    flex: '0 0 ' + (sizes[2] || large) * 100 / cols + '%'
  };

  return _react2.default.createElement(
    _responsive2.default,
    { style: styles },
    children
  );
};

Col.defaultProps = {
  small: _config2.default.cols,
  medium: _config2.default.cols,
  large: _config2.default.cols,
  cols: _config2.default.cols,
  sizes: []
};

Col.propTypes = {
  children: _propTypes2.default.node.isRequired,
  small: _propTypes2.default.number,
  medium: _propTypes2.default.number,
  large: _propTypes2.default.number,
  cols: _propTypes2.default.number,
  sizes: _propTypes2.default.arrayOf(_propTypes2.default.number)
};

exports.default = Col;