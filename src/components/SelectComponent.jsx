import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SelectComponent = ({ title, value, func, items }) => {
  return (
    <FormControl fullWidth required>
      <InputLabel id="demo-simple-select-required-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-required-label"
        id="demo-simple-select-required"
        value={value}
        label={title}
        onChange={(event) => func(event.target.value)}>
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
