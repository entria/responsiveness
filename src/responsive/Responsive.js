import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getViewport } from './utils';

class Responsive extends Component {
  static defaultProps = {
    style: {
      base: {},
      small: {},
      medium: {},
      large: {},
    },
  };

  static propTypes = {
    style: PropTypes.shape({
      base: {},
      small: PropTypes.object,
      medium: PropTypes.object,
      large: PropTypes.object,
    }),
  };

  state = {
    timeout: null,
    viewport: getViewport(window.outerWidth),
  };

  componentDidMount() {
    window.addEventListener('resize', () => this.handleResize());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.handleResize());
  }

  handleResize() {
    clearTimeout(this.state.timeout);

    this.setState({
      timeout: setTimeout(() => {
        this.setState({
          viewport: getViewport(window.outerWidth),
        });
      }, 100),
    });
  }

  render() {
    const style = {
      ...this.props.style.base,
      ...this.props.style[this.state.viewport],
    };

    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default Responsive;
