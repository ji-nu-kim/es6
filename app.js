import { items, map, filter, reduce, go, pipe, add } from './utils.js';

// go(
//   1,
//   (n) => n + 1,
//   (n) => n + 2,
//   console.log,
// );

// const f = pipe(
//   (a, b) => a + b,
//   (a) => a + 10,
//   (a) => a + 100,
// );

go(
  items,
  (items) => map((i) => i.price, items),
  (prices) => filter((p) => p <= 700, prices),
  (price) => reduce(add, price),
  console.log,
);

const total_price = pipe(
  map((i) => i.price),
  reduce(add),
);

const base_total_price = (predi) => pipe(filter(predi), total_price);

go(
  items,
  base_total_price((p) => p.price <= 700),
  console.log,
);

go(
  items,
  base_total_price((p) => p.price >= 700),
  console.log,
);
