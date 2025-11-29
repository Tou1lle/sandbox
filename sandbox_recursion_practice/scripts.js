function sumRange(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumRange(n - 1);
}

function power(n, e) {
  if (e === 0) {
    return 1;
  }
  return n * power(n, e - 1);
}

function factorial(n) {
  if (n === 1) {
    return 1
  }
  return n * factorial(n - 1);
}

function all(arr, cb) {
  let isAll = true;
  for (const num of arr) {
    if (!cb(num)) isAll = false;
  }

  return isAll;
}


console.log(sumRange(3));
console.log(power(2, 4));
console.log(factorial(5));
console.log(all([1,2,3], num => num > 3));
console.log(all([1,2,3], num =>   num > 0));