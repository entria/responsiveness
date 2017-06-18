import React from 'react';
import PropTypes from 'prop-types';

import config from '../config';

const Row = ({ children, alignItems, justifyContent }) => {
  const styles = {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: alignItems,
    justifyContent: justifyContent,
    flexWrap: 'wrap',
    margin: -config.gutter,
  };

  return (
    <div style={styles}>
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
};

export default Row;