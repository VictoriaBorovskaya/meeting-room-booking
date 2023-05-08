import { subDays } from 'date-fns';

export const towersArr = ['Башня А', 'Башня Б'];

// заполнить массивы с этажами и переговорными для облегчения жизни можно с помощью библиотеки lodash (renge)
export const floorArr = Array.from(Array(28).keys()).slice(3);
export const roomsArr = Array.from(Array(11).keys()).slice(1);

// для timePicker и dataPicker
const date = new Date();
export const today = date.setDate(date.getDate() + 1);
export const dateInterval = subDays(today, -40);
export const minTimeStart = date.setHours(9, 0, 0, 0);
export const maxTimeStart = date.setHours(17, 0, 0, 0);
export const minTimeEnd = date.setHours(10, 0, 0, 0);
export const maxTimeEnd = date.setHours(18, 0, 0, 0);
