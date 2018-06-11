import React from 'react';
import PropTypes from 'prop-types';
import FilterInputList from '../containers/FilterRowList';

const rowList = ({ rowList, addRowList }) => (
  <div className="row">
    {rowList.map(list => <FilterInputList key={list.id} {...list} />)}
  </div>
);
