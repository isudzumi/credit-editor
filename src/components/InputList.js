import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const InputList = ({ inputs, addInputList }) => (
  <div className="column">
    {inputs.map(input => (
      <Input key={input.id} {...input} onFocus={() => addInputList(input.id)} />
    ))}
  </div>
);

InputList.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  addInputList: PropTypes.func.isRequired
};

export default InputList;
