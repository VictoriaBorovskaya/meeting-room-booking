import { add, set } from 'date-fns';

export const towersArr = ['Башня А', 'Башня Б'];

// заполнить массивы с этажами и переговорными для облегчения жизни можно с помощью библиотеки lodash (renge)
export const floorArr = Array.from(Array(28).keys()).slice(3);
export const roomsArr = Array.from(Array(11).keys()).slice(1);

// для timePicker и dataPicker
export const today = add(new Date(), { days: 1 });
export const minTimeStart = set(today, { hours: 9 });
export const maxTimeStart = set(today, { hours: 17 });
export const minTimeEnd = set(today, { hours: 10 });
export const maxTimeEnd = set(today, { hours: 18 });
