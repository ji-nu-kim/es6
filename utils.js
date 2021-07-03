export const items = [
  { name: 'rolex', price: 1000, quantity: 1, isSelected: true },
  { name: 'omega', price: 700, quantity: 2, isSelected: true },
  { name: 'cartier', price: 600, quantity: 3, isSelected: false },
  { name: 'zenith', price: 800, quantity: 2, isSelected: true },
  { name: 'iwc', price: 900, quantity: 1, isSelected: false },
];

export const add = (a, b) => a + b;

export const curry =
  f =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

export const map = curry((f, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    let i = cur.value;
    res.push(f(i));
  }
  return res;
});

export const filter = curry((f, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    let i = cur.value;
    if (f(i)) {
      res.push(i);
    }
  }
  return res;
});

export const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  } else {
    iter = iter[Symbol.iterator]();
  }
  let cur;
  while (!(cur = iter.next()).done) {
    let i = cur.value;
    acc = f(acc, i);
  }
  return acc;
});

export const go = (...args) => reduce((a, f) => f(a), args);
export const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);

export const range = n => {
  let i = -1;
  let res = [];
  while (++i < n) {
    res.push(i);
  }
  return res;
};

export const take = curry((n, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    let i = cur.value;
    res.push(i);
    if (res.length === n) return res;
  }
  return res;
});
