import { add, reduce, go, range, take, map, filter, curry } from './utils.js';

const L = {};
L.range = function* (n) {
  let i = -1;
  while (++i < n) {
    yield i;
  }
};
L.map = curry(function* (f, iter) {
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    let i = cur.value;
    yield f(i);
  }
});
L.filter = curry(function* (f, iter) {
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    let i = cur.value;
    if (f(i)) yield i;
  }
});

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
