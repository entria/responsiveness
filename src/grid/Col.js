import React from 'react';
import PropTypes from 'prop-types';

import config from '../config';
import { BASE, SMALL, MEDIUM, LARGE } from '../constants';
import Responsive from '../responsive';

const Col = ({ children, small, medium, large, cols }) => {
  const styles = {};

  styles[BASE] = {
    boxSizing: 'border-box',
    padding: config.gutter,
  };

  styles[SMALL] = {
    flex: `0 0 ${small * 100 / cols}%`,
  };

  styles[MEDIUM] = {
    flex: `0 0 ${medium * 100 / cols}%`,
  };

  styles[LARGE] = {
    flex: `0 0 ${large * 100 / cols}%`,
  };

  return (
    <Responsive style={styles}>
      {children}
    </Responsive>
  );
};

Col.defaultProps = {
  small: config.cols,
  medium: config.cols,
  large: config.cols,
  cols: config.cols,
};

Col.propTypes = {
  children: PropTypes.node.isRequired,
  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
  cols: PropTypes.number,
};

export default Col;