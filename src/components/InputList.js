import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const InputList = ({ inputs, addInputList }) => (
  <div className="row">
    {inputs.map((rowList, row) => (
      <div key={row.toString()} className="column">
        {rowList.map(input => (
          <Input
            key={`${input.row}-${input.col}`}
            {...input}
            onFocus={() => addInputList(input.row, input.col)}
          />
        ))}
      </div>
    ))}
  </div>
);

InputList.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
  ).isRequired,
  addInputList: PropTypes.func.isRequired
};

export default InputList;
