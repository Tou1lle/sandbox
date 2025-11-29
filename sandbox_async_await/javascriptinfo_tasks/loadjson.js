async function loadJson(url) {
  const respone = await fetch(url);
  if (respone.status == 200) {
    return await respone.json();
  } else {
    throw new Error(respone.status);
  }
}

loadJson('https://javascript.info/no-such-user.json')
.catch(alert);