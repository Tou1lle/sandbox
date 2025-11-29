console.log("Hello From Script File");

/**
 * 
 * @param {number} number 
 * @returns number + 7
 */
function add7(number) {
  return number + 7;
}

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns product of num1 and num2
 */
function multiply(num1, num2) {
  return num1 * num2;
}

/**
 * 
 * @param {string} word 
 * @returns capitalized word
 */
function capitalize(word) {
  const firstLetter = word.toLowerCase().charAt(0).toUpperCase();
  const restOfWord = word.slice(1).toLowerCase();

  return firstLetter + restOfWord;
}

/**
 * 
 * @param {string} word 
 * @returns only the last letter of word
 */
function lastLetter(word) {
  return word.slice(-1);
}