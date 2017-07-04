'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Responsive = function (_Component) {
  _inherits(Responsive, _Component);

  function Responsive() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Responsive);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Responsive.__proto__ || Object.getPrototypeOf(Responsive)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      timeout: null,
      viewport: (0, _utils.getViewport)(window.innerWidth)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Responsive, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('resize', function () {
        return _this2.handleResize();
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      window.removeEventListener('resize', function () {
        return _this3.handleResize();
      });
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      var _this4 = this;

      clearTimeout(this.state.timeout);

      this.setState({
        timeout: setTimeout(function () {
          _this4.setState({
            viewport: (0, _utils.getViewport)(window.innerWidth)
          });
        }, 100)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var style = _extends({}, this.props.style.base, this.props.style[this.state.viewport]);

      return _react2.default.createElement(
        'div',
        { style: style },
        this.props.children
      );
    }
  }]);

  return Responsive;
}(_react.Component);

Responsive.defaultProps = {
  style: {
    base: {},
    small: {},
    medium: {},
    large: {}
  }
};
Responsive.propTypes = {
  style: _propTypes2.default.shape({
    base: _propTypes2.default.object,
    small: _propTypes2.default.object,
    medium: _propTypes2.default.object,
    large: _propTypes2.default.object
  })
};
exports.default = Responsive;