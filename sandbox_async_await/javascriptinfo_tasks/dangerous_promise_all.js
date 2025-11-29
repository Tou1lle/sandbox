let database;

function connect() {
  database = {
    async query(isOK) {
      if (!isOK) throw new Error("Query Failed!");
    }
  };
}

function disconnect() {
  database = null;
}

function delay(fn, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(fn);
      fn().then(resolve, reject)
    }, ms);
  });
}

async function run() {
  connect();

  try {
    await Promise.all([
      delay(() => database.query(true), 100),
      delay(() => database.query(false), 200),
      delay(() => database.query(false), 300),
    ]);
  } catch(error) {
    console.log("Error handled");
  }

  disconnect();
}

run();