const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i === 0
          ? { value: undefined, done: true }
          : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

const iter = iterable[Symbol.iterator]();

console.log(iter.next());
for (let a of iterable) console.log(a);
