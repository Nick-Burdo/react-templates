import React from 'react';
import PropTypes from 'prop-types';

class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: {
        x: 0,
        y: 0
      }
    };

    this.onMouseMove = this.onMouseMove.bind(this);
  }

  getChildContext() {
    return {
      position: this.state.position
    };
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove(event) {
    this.setState({
      position: {
        x: event.clientX,
        y: event.clientY
      }
    });
  }

  render() {
    return this.props.children
  }
}

Provider.propTypes = {};

Provider.childContextTypes = {
  position: PropTypes.object
};

export default Provider;
 
