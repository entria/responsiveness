import React from 'react';
import PropTypes from 'prop-types';

import config from '../config';
import { responsiveStyle } from '../utils';

const Col = ({ children, small, medium, large }) => {
  const styles = {
    boxSizing: 'border-box',
    padding: config.gutter,
    flex: responsiveStyle({
      large: `0 0 ${large * 100 / config.cols}%`,
      medium:  `0 0 ${medium * 100 / config.cols}%`,
      small: `0 0 ${small * 100 / config.cols}%`,
    }),
  };

  return (
    <div style={styles}>
      {children}
    </div>
  );
};

Col.defaultProps = {
  small: config.cols,
  medium: config.cols,
  large: config.cols,
};

Col.propTypes = {
  children: PropTypes.node.isRequired,
  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
};

export default Col;