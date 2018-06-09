import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id, onFocus }) => {
  const textInput = React.createRef();
  return <input name={id} type="text" ref={textInput} onFocus={onFocus} />;
};

Input.propTypes = {
  id: PropTypes.number.isRequired,
  onFocus: PropTypes.func.isRequired
};

export default Input;
