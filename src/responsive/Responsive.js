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
      base: PropTypes.object,
      small: PropTypes.object,
      medium: PropTypes.object,
      large: PropTypes.object,
    }),
  };

  constructor(props) {
    super(props);
    this.timeout = null;
  }

  state = {
    viewport: getViewport(window.innerWidth),
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);

    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.setState({
        viewport: getViewport(window.innerWidth),
      });
    }, 100);
  };

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
