import React from 'react';
import PropTypes from 'prop-types';

const Consumer = (props, {position}) => (
  <p>Mouse position is: X = {position.x}, Y = {position.y} </p>
);

Consumer. propTypes = {};

Consumer.contextTypes = {
  position: PropTypes.object
};

export default Consumer;