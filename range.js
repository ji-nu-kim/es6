import { add, reduce } from './utils.js';

function test(name, time, f) {
  console.time(name);
  while (time--) f();
  console.timeEnd(name);
}

const range = n => {
  let i = -1;
  let res = [];
  while (++i < n) {
    res.push(i);
  }
  return res;
};
const list1 = range(5);

const L = {};
L.range = function* (n) {
  let i = -1;
  while (++i < n) {
    yield i;
  }
};
const list2 = L.range(5);

test('range', 10, () => reduce(add, range(1000000)));
test('L.range', 10, () => reduce(add, L.range(1000000)));
