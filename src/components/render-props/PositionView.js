import React from 'react';
import PropTypes from 'prop-types';

const PositionView = ({ position }) => (
  <p>Mouse position is: X = {position.x}, Y = {position.y} </p>
);

PositionView. propTypes = {
  position: PropTypes.object
};

export default PositionView;