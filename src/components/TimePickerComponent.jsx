import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ru } from 'date-fns/locale';

const TimePickerComponent = ({ title, value, setValue, minTime, maxTime }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker
          label={title}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          minTime={minTime}
          maxTime={maxTime}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default TimePickerComponent;
