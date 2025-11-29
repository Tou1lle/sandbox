async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  const value = wait().then(result => result);
  return value;
}

const value = f().then(value => console.log(value));
console.log(value)