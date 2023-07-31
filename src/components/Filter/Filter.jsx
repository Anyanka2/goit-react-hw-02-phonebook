import React from 'react';
import { FilterCont, Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

function Filter({ value, onChangeFilter }) {
  return (
    <FilterCont>
      <Label>
        Find contacts by name or phone number
        <Input type="text" value={value} onChange={onChangeFilter} />
      </Label>
    </FilterCont>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
