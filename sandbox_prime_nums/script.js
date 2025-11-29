let num = +prompt("Enter a number to check prime up to", 1);
const primeNumbers = []

outer:
for (let i = num; i > 1; i--) {
  for (let j = i - 1; j > 1; j--) {
    if (i % j === 0) continue outer;
  }

  primeNumbers.push(i);
}

/**
 * loop from biggest number
 * each number must be divided by all other smaller numbers excluding 1
 * IF there is a number between biggest and 1 that get remainder 0
 *   CONTINUE to next number
 * ELSE add number to prime array 
 */