import _ from 'lodash';

const data = [
  {
    username: 'nico',
    role: 'admin',
  },
  {
    username: 'kakarot',
    role: 'seller',
  },
  {
    username: 'pedrito',
    role: 'seller',
  },
  {
    username: 'perro sanchez',
    role: 'customer',
  },
];

let conj = _.groupBy(data, (item) => item.role);

console.log(conj);
