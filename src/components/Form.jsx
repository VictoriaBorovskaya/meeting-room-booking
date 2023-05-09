import React, { useState, useEffect } from 'react';
import SelectComponent from 'components/SelectComponent';
import Modal from 'components/Modal';
import ButtonComponent from 'components/ButtonComponent';
import DatePickerComponent from 'components/DatePickerComponent';
import TimePickerComponent from 'components/TimePickerComponent';
import { FormSection, TimeContainer } from 'components/StyledComponents';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { formatISO9075 } from 'date-fns';
import { towersArr, floorArr, roomsArr, today, minTimeStart, maxTimeStart, minTimeEnd, maxTimeEnd } from './Scripts';

const Form = () => {
  // очень много state для формы, можно решить проблему с помощью react final form
  const [tower, setTower] = useState('');
  const [floor, setFloor] = useState('');
  const [room, setRoom] = useState('');
  const [startDate, setStartDate] = useState(today);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [comment, setComment] = useState('');
  const [isTimeError, setTimeError] = useState(false);
  const [isItemError, setItemError] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

  //для валидации формы
  const [error, setError] = useState({
    towerError: false,
    floorError: false,
    roomError: false,
  });

  // для хранения забронированных переговорок
  const [bookings, setBookings] = useState(
    localStorage.getItem('bookings') ? JSON.parse(localStorage.getItem('bookings')) : [],
  );

  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);

  const handleClick = (event) => {
    event.preventDefault();
    const item = {
      tower,
      floor,
      room,
      startDate: startDate === today ? today : startDate.getTime(),
      startTime,
      endTime,
      comment,
    };

    if (tower === '') {
      setError({ ...error, towerError: true, floorError: false, roomError: false });
    } else if (floor === '') {
      setError({ ...error, floorError: true, towerError: false, roomError: false });
    } else if (room === '') {
      setError({ ...error, roomError: true, floorError: false, towerError: false });
    } else {
      if (
        startTime >= endTime ||
        startTime === null ||
        endTime === null ||
        formatISO9075(startTime, { representation: 'time' }) >
          formatISO9075(new Date(maxTimeStart), { representation: 'time' }) ||
        formatISO9075(endTime, { representation: 'time' }) >
          formatISO9075(new Date(maxTimeEnd), { representation: 'time' })
      ) {
        setTimeError(true);
        setItemError(false);
      } else {
        setError({ ...error, towerError: false, floorError: false, roomError: false });
        //этот фильтр проще написать с использованием lodash :(
        const bookingsFilter = bookings.filter(
          (elem) =>
            (elem.room === item.room) &
            (elem.tower === item.tower) &
            (elem.floor === item.floor) &
            (elem.startDate === item.startDate) &
            ((item.startTime >= elem.startTime) & (elem.endTime >= item.startTime) ||
              (item.endTime >= elem.startTime) & (elem.endTime >= item.endTime) ||
              (elem.startTime >= item.startTime) & (item.endTime >= elem.endTime) ||
              (item.startTime >= elem.startTime) & (elem.endTime >= item.endTime)),
        );

        if (bookingsFilter.length === 0) {
          setBookings([item, ...bookings]);
          let json = JSON.stringify(item);
          console.log(json);
          setIsBooking(true);
          setItemError(false);
          setTimeError(false);
        } else {
          setItemError(true);
          setTimeError(false);
        }
      }
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
    setTimeError(false);
    setItemError(false);
  };

  return (
    <FormSection onSubmit={(event) => handleClick(event)}>
      <SelectComponent title={'Башня'} value={tower} func={setTower} items={towersArr} error={error.towerError} />
      <SelectComponent title={'Этаж'} value={floor} func={setFloor} items={floorArr} error={error.floorError} />
      <SelectComponent title={'Переговорная'} value={room} func={setRoom} items={roomsArr} error={error.roomError} />
      <DatePickerComponent startDate={startDate} setStartDate={setStartDate} />
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
      {isTimeError && <Alert severity="error">Некорректно указано время бронирования</Alert>}
      {isItemError && <Alert severity="error">Выбранная переговорная уже забронирована</Alert>}
      {bookings.length > 0 && (
        <Modal
          isBooking={isBooking}
          setIsBooking={setIsBooking}
          clearForm={clearForm}
          tower={tower}
          floor={floor}
          room={room}
          startDate={startDate}
          startTime={startTime}
          endTime={endTime}
        />
      )}
      <ButtonComponent clearForm={clearForm} />
    </FormSection>
  );
};

export default Form;
