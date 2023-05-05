import { add, set } from 'date-fns';

export const towersArr = ['Башня А', 'Башня Б'];
export const floorArr = [
  3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
];
export const roomsArr = [
  'Переговорная №1',
  'Переговорная №2',
  'Переговорная №3',
  'Переговорная №4',
  'Переговорная №5',
  'Переговорная №6',
  'Переговорная №7',
  'Переговорная №8',
  'Переговорная №9',
  'Переговорная №10',
];

export const today = add(new Date(), { days: 1 });
export const minTimeStart = set(today, { hours: 9 });
export const maxTimeStart = set(today, { hours: 17 });
export const minTimeEnd = set(today, { hours: 10 });
export const maxTimeEnd = set(today, { hours: 18 });
