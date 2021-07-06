import { reduce, pipe, curry, L } from './utils.js';

const join = curry((sep = ',', iter) => reduce((a, b) => `${a}${sep}${b}`, iter));

const queryStr = pipe(
  L.entries,
  a => (console.log(a), a),
  L.map(([k, v]) => `${k}=${v}`),
  join('&')
);
console.log(queryStr({ limit: 10, offset: 10, type: 'notice' }));
