import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { filterQuery } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleGetValue = evt => {
    dispatch(filterQuery(evt.currentTarget.value));
  };
  return (
    <label>
      <TextField
        onChange={handleGetValue}
        margin="normal"
        fullWidth
        id="name"
        label="Find by name"
        name="name"
        autoComplete="name"
        autoFocus
      />
      {/* <input onChange={handleGetValue} name="filter" type="text"></input> */}
    </label>
  );
};
