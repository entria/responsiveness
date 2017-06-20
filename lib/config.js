'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('./constants');

var config = {};

// Number of cols
config.cols = 12;

// Margin between cols
config.gutter = 15;

// Breakpoints
config.breakpoints = {};
config.breakpoints[_constants.MEDIUM] = 481;
config.breakpoints[_constants.LARGE] = 1025;

exports.default = config;