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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(_ref) {
  var children = _ref.children,
      alignItems = _ref.alignItems,
      justifyContent = _ref.justifyContent;

  var styles = {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: alignItems,
    justifyContent: justifyContent,
    flexWrap: 'wrap',
    margin: -_config2.default.gutter
  };

  return _react2.default.createElement(
    'div',
    { style: styles },
    children
  );
};

Row.propTypes = {
  children: _propTypes2.default.node.isRequired,
  alignItems: _propTypes2.default.string,
  justifyContent: _propTypes2.default.string
};

exports.default = Row;