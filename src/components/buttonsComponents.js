import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ className, value, handleClick }) => (
  <button type="button" className={`btn ${className}`} onClick={() => handleClick(value)}>
    {value}
  </button>
);

Buttons.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Buttons;
