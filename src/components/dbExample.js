const { nanoid } = require('nanoid');

const areas = ['Склад сировини'];
const types = ['Комірник', 'КІП'];
const currentDate = () => {
  const date = new Date();
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};
const point1 = {
  id: nanoid(),
  name: 'Ваги настільні',
  area: areas[0],
  type: types[1],
};
const point2 = {
  id: nanoid(),
  name: 'Монітор',
  area: areas[0],
  type: types[0],
};
const point3 = {
  id: nanoid(),
  name: 'Ручка металодетектуюча',
  area: areas[0],
  type: types[0],
};
export const points = [point1, point2, point3];
export const record = [
  {
    date: currentDate(),
    point: point2.id,
    value: true,
  },
];
