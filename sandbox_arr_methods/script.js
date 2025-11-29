/**
 * 
 * @param {string} word 
 * @returns camelized word: var-one -> varOne
 */
function camelize(word) {
  return word
    .split("-")
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1); 
    })
    .join("");
}

/**
 * 
 * @param {Array} arr 
 * @param {Number} a 
 * @param {Number} b 
 * @returns new Array in range a - b
 */
function filterRange(arr, a, b) {
  return arr.filter((num) => num > a && num < b);
}

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

function sortDecrease(a, b) {
  return b - a;
}

function copySorted(array) {
  const copy = array.slice(0);

  return copy.sort();
}

function mapToNames(arr) {
  return arr.map(user => user.name);
}

function mapFullNameObj(arr) {
  return arr.map(user => {
    return {
      fullName: `${user.name} ${user.surname}`,
      id: user.id,
    };
  });
}

function sortObjAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

/**
 * Shuffle an array pseudocode:
 */
function shuffleArray(arr) {
  arr.sort((a, b) => Math.random() - Math.random());
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getAverageAge(arr) {
  const sum = arr.reduce((total, current) => total + current.age, 0);
  return sum / arr.length;
}

function uniqueOnly(arr) {
  const notUniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    const copy = arr.slice(i+1);

    if (copy.includes(arr[i])) {
      notUniqueArr.push(arr[i]);
    }
  }

  return arr.filter(x => !notUniqueArr.includes(x));
}

/**
 * create empty array (named uniqueValues) for pushing in values
 * 
 * loop through array argument
 *  check if uniqueValues contains the current value
 *    Yes -> do nothing
 *    No  -> push the value to uniqueArray 
 * 
 * return the unique array
 */
function unique(arr) {
  const uniqueValues = [];

  arr.forEach((name) => {
    if (!(uniqueValues.includes(name))) {
      uniqueValues.push(name);
    }
  });

  return uniqueValues;
}

function groupById(arr) {
  return arr.reduce((obj, currentId) => {
    obj[currentId.id] = currentId;
    return obj;
  },{});
}