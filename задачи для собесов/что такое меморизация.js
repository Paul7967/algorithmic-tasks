const memo = (callback) => {
  const k = {};

  return (...args) => {
    const key = args.toString();

    if (!k[key]) {
      k[key] = callback(...args);
    }

    return k[key];
  };
};

const sum = (a, b) => {
  console.log("summ is called");
  return a + b;
};

const memoizedSum = memo(sum);

console.log(memoizedSum(1, 2));
console.log(memoizedSum(1, 2));
