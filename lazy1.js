import { go, range, take, map, filter, L } from './utils.js';

console.time('');
go(
  range(10000),
  map(n => n + 10),
  filter(n => n % 2),
  take(1000),
  console.log
);
console.timeEnd('');

console.time('');
go(
  L.range(10000),
  L.map(n => n + 10),
  L.filter(n => n % 2),
  take(1000),
  console.log
);
console.timeEnd('');
