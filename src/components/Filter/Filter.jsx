import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { setFilter } from '../../redux/filtersSlice';
import { Input, Label } from './Filter.styled';

import debounce from 'lodash.debounce';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const filterValue = e.target.value;

    dispatch(setFilter(filterValue));
  };
  const debouncedChangeHandler = useCallback(debounce(onChange, 1000), []);

  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          onChange={debouncedChangeHandler}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </Label>
    </div>
  );
};
