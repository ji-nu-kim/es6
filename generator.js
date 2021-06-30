function* infinity(n = 0) {
  while (true) yield n++;
}

function* limit(n, iter) {
  for (let i of iter) {
    yield i;
    if (n === i) return;
  }
}

function* odds(n) {
  for (let i of limit(n, infinity(1))) {
    if (i % 2) yield i;
  }
}

let iter1 = odds(10);

const [a, b, ...rest] = iter1;
const hundred = [...odds(100)];

console.log(hundred);
