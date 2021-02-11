import React from 'react';
import PropTypes from 'prop-types';

function Button({ name }) {
  return (
    <button type="button" name={name}>{name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
