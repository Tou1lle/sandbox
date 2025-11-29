const Formatter = (function () {
  let timesRun = 0;
  const timesRunArr = []

  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
  const setTimesRun = () => {
    log("Setting times run");
    ++timesRun;
  };
  const getTimesRun = () => {
    return timesRun;
  }
 
  const makeUpperCase = (text) => {
    log("Making upper case");
    setTimesRun();
    timesRunArr.push(null);
    return text.toUpperCase();
  };

  const writeToDOM = (selector, message) => {
    document.querySelector(selector).innerHTML = message;
  }

  return {
    timesRun,
    timesRunArr,
    makeUpperCase,
    getTimesRun,
    writeToDOM,
  }
})();

console.log(Formatter.makeUpperCase("tomek"));
console.log(Formatter.timesRun);
console.log(Formatter.getTimesRun());

console.log(Formatter.makeUpperCase("tomek"));
console.log(Formatter.timesRun);
console.log(Formatter.getTimesRun());