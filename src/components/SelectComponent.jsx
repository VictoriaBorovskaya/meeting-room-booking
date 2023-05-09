import { useState } from 'react';
import { roomsArr } from './Scripts';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const SelectComponent = ({ title, value, func, items, error }) => {
  const [isFieldDirty, setIsFieldDirty] = useState(false);

  const onBlur = () => {
    if (value) {
      setIsFieldDirty(true);
    } else {
      setIsFieldDirty(false);
    }
  };

  return (
    <TextField
      id="outlined-select-currency"
      error={!isFieldDirty && error}
      select
      label={title}
      value={value}
      onChange={(event) => func(event.target.value)}
      onBlur={() => onBlur()}
      helperText={!isFieldDirty && error ? 'Обязательное поле' : ''}>
      {items.map((item) => (
        <MenuItem key={item} value={item}>
          {items === roomsArr ? `Переговорная №${item}` : item}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectComponent;
