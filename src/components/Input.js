import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ row, col, onFocus }) => {
  const textInput = React.createRef();
  return (
    <input
      name={`${row}-${col}`}
      type="text"
      ref={textInput}
      onFocus={onFocus}
    />
  );
};

Input.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  onFocus: PropTypes.func.isRequired
};

export default Input;
