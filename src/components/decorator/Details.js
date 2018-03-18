import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ name, title, language }) => (
  <div>
    <h3>{ title }</h3>
    <p>{ name } works with { language }</p>
  </div>
);

Details.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  language: PropTypes.string
};

export default Details;
 
