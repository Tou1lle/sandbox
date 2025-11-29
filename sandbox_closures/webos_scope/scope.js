const age = 100;
let dog = 'snickers';

/*
function go() {
  const age = 200;
  const hair = "blonde";
}
*/

console.log(age);
//console.log(hair);

function isCool(name) {
  let cool;
  if (name === 'wes') {
    const cool = true;
  }
  console.log(cool);
  return cool;
}

function logDog() {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog();
}

go();
logDog();