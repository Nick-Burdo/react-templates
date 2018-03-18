import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({ children }) => (
  <div>
    {children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.element
};

export default Wrapper;
 
