class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  const respone = await fetch(url);
  if (respone.status === 200) {
    return respone.json();
  } else {
    throw new HttpError(respone);
  }
}

async function demoGithubUser() {
  let name = prompt("Enter a name", "iliakan");

  try {
    const user = await loadJson(`https://api.github.com/users/${name}`);
    alert(`Full name: ${user.name}`);
    return user;
  } catch (error) {
    if (error instanceof HttpError && error.response.status == 404) {
      alert("No such user, please reenter");
    } else {
      throw error;
    }
  }  
}

demoGithubUser();