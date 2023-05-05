import React, { useState } from 'react';
import SelectComponent from 'components/SelectComponent';
import TextField from '@mui/material/TextField';
// import { add, set } from 'date-fns';
import Button from '@mui/material/Button';
import DatePickerComponent from 'components/DatePickerComponent';
import TimePickerComponent from 'components/TimePickerComponent';
import Alert from '@mui/material/Alert';
import { FormSection, TimeContainer, ButtonContainer } from 'components/StyledComponents';
import {
  towersArr,
  floorArr,
  roomsArr,
  today,
  minTimeStart,
  maxTimeStart,
  minTimeEnd,
  maxTimeEnd,
} from './Scripts';

const Form = () => {
  const [tower, setTower] = useState('');
  const [floor, setFloor] = useState('');
  const [room, setRoom] = useState('');
  const [startDate, setStartDate] = useState(today);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [comment, setComment] = useState('');
  const [isOpen, setOpen] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    if (startTime >= endTime || startTime === null) {
      console.log('Неверно введено время');
      setOpen(true);
    } else {
      const item = {
        tower,
        floor,
        room,
        startDate,
        startTime,
        endTime,
        comment,
      };
      let json = JSON.stringify(item);
      console.log(json);
      clearForm();
    }
  };

  const clearForm = () => {
    setTower('');
    setFloor('');
    setRoom('');
    setStartDate(today);
    setStartTime(null);
    setEndTime(null);
    setComment('');
    setOpen(false);
  };

  return (
    <FormSection onSubmit={(event) => handleClick(event)}>
      <SelectComponent title={'Башня'} value={tower} func={setTower} items={towersArr} />
      <SelectComponent title={'Этаж'} value={floor} func={setFloor} items={floorArr} />
      <SelectComponent title={'Переговорная'} value={room} func={setRoom} items={roomsArr} />
      <DatePickerComponent today={today} startDate={startDate} setStartDate={setStartDate} />
      <TimeContainer>
        <TimePickerComponent
          title="Начало"
          value={startTime}
          setValue={setStartTime}
          minTime={minTimeStart}
          maxTime={maxTimeStart}
        />
        <TimePickerComponent
          title="Конец"
          value={endTime}
          setValue={setEndTime}
          minTime={minTimeEnd}
          maxTime={maxTimeEnd}
        />
      </TimeContainer>
      <TextField
        id="outlined-multiline-static"
        label="Комментарий"
        multiline
        rows={3}
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      {isOpen && <Alert severity="error">Некорректно указано время бронирования</Alert>}
      <ButtonContainer>
        <Button variant="contained" size="large" fullWidth type="submit">
          Отправить
        </Button>
        <Button variant="contained" size="large" onClick={() => clearForm()} fullWidth>
          Очистить
        </Button>
      </ButtonContainer>
    </FormSection>
  );
};

export default Form;
