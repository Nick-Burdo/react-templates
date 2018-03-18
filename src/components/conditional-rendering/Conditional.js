import React from 'react';
import PropTypes from 'prop-types';

const Conditional = ({condition}) => (
  <div>
    <h1>Conditional rendering</h1>
    {condition && <h2>Condition is true</h2>}
    <p>Condition is {condition ? 'true' : 'false'}</p>
  </div>
);

Conditional.propTypes = {
  condition: PropTypes.bool
};

export default Conditional;
 
