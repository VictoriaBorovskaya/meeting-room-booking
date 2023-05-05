import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { subDays } from 'date-fns';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ru } from 'date-fns/locale';

const DatePickerComponent = ({ today, startDate, setStartDate }) => {
  const yesterday = subDays(today, -30);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          label="Выберите дату"
          minDate={today}
          maxDate={yesterday}
          format="dd/MM/yyyy"
          orientation="portrait"
          className="datePickerContainer"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
