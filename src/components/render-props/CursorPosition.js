import React from 'react';
import PropTypes from 'prop-types';

class CursorPosition extends React.Component {
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
    return this.props.children(this.state.position)
  }
}

CursorPosition.propTypes = {};

export default CursorPosition;
 
