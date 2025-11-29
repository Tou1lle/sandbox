import { countryList } from "./country-list.js";

const CZ_POSTAL_CODE = new RegExp(/\d{3}[ ]?\d{2}/);
const SPECIAL_CHARS = new RegExp(/[.!@#$%^&*()_+=-]/);
const NUMBERS = new RegExp(/[0-9]/);
const UPPERCASE = new RegExp(/[A-Z]/);

const form = document.querySelector("form");
const formControls = document.querySelectorAll(".form-control");
const inputs = document.querySelectorAll("input");

const emailContainer = document.querySelector(".email-container");
const countryContainer = document.querySelector(".country-container");
const postalcodeContainer = document.querySelector(".postalcode-container");
const passwordContainer = document.querySelector(".password-container");
const passwordConfirmContainer = document.querySelector(".password-confirm-container");
const datalist = document.querySelector("#country-list");



countryList.forEach(country => {
  const option = document.createElement("option");
  option.textContent = country;
  datalist.appendChild(option);
});

function toggleSpan(formContainer, formControl) {
  const span = formContainer.querySelector("span");
  formControl.validity.valueMissing === true ? span.style.display = "inline" : span.style.display = "none";
}

function badPassword(formControl, errorMessageSpecific) {
  errorMessageSpecific.classList.add("bad");
  errorMessageSpecific.classList.remove("good");
  formControl.classList.add("invalid-from-js");
}

function goodPassword(formControl, errorMessageSpecific) {
  errorMessageSpecific.classList.add("good");
  errorMessageSpecific.classList.remove("bad");
  formControl.classList.remove("invalid-from-js");
}

function getInputMessage(formContainer) {
  const formInput = formContainer.querySelector("input");
  const errorMessage = formContainer.querySelector(".error-message");

  return [formInput, errorMessage];
}

function getPasswordConstraints(errorMessage) {
  const passwordLength = errorMessage.querySelector(".password-length");
  const passwordUppercase = errorMessage.querySelector(".password-uppercase");
  const passwordNumber = errorMessage.querySelector(".password-number");
  const passwordSpecialChar = errorMessage.querySelector(".password-special");

  return { passwordLength, passwordUppercase, passwordNumber, passwordSpecialChar };
}


function checkEmailValidity(formControl, errorMessage) {
  if (!(formControl.value.endsWith("@email.cz") || formControl.value.endsWith("@gmail.com"))) {
    formControl.classList.add("invalid-from-js");
    formControl.validity.valueMissing === true
      ? errorMessage.textContent = ""
      : errorMessage.textContent = "The mail must be from @email.cz or @gmail.com";
  } else {
    formControl.classList.remove("invalid-from-js");
  }
}

function checkPostalcodeValidity(formControl, errorMessage) {
  if (formControl.validity.patternMismatch) {
    errorMessage.textContent = "The postal code is CZ - ***** or *** **";
  }
}

function checkPasswordLength(formControl, errorMessageSpecific) {
  if (formControl.validity.tooShort || formControl.validity.valueMissing) {
    badPassword(formControl, errorMessageSpecific);
  } else {
    goodPassword(formControl, errorMessageSpecific);
  }
}

function checkPasswordNumber(formControl, errorMessageSpecific) {
  if (!NUMBERS.test(formControl.value) || formControl.validity.valueMissing) {
    badPassword(formControl, errorMessageSpecific);
  } else {
    goodPassword(formControl, errorMessageSpecific);
  }
}

function checkPasswordUppercase(formControl, errorMessageSpecific) {
  if (!UPPERCASE.test(formControl.value) || formControl.validity.valueMissing) {
    badPassword(formControl, errorMessageSpecific);
  } else {
    goodPassword(formControl, errorMessageSpecific);
  }
}

function checkPasswordSpecial(formControl, errorMessageSpecific) {
  if (!SPECIAL_CHARS.test(formControl.value) || formControl.validity.valueMissing) {
    badPassword(formControl, errorMessageSpecific);
  } else {
    goodPassword(formControl, errorMessageSpecific);
  }
}

function passwordsMatch(password, passwordConfirm) {
  return password === passwordConfirm;
}

function emailError() {
  const [emailInput, errorMessage] = getInputMessage(emailContainer);

  errorMessage.textContent = "";

  toggleSpan(emailContainer, emailInput);
  checkEmailValidity(emailInput, errorMessage);
}

function postalcodeError() {
  const [postalcodeInput, errorMessage] = getInputMessage(postalcodeContainer);

  errorMessage.textContent = "";
  toggleSpan(postalcodeContainer, postalcodeInput);

  checkPostalcodeValidity(postalcodeInput, errorMessage);
}

function passwordError() {
  const [passwordInput, errorMessage] = getInputMessage(passwordContainer);
  const passwordConstraints = getPasswordConstraints(errorMessage);

  toggleSpan(passwordContainer, passwordInput);

  checkPasswordLength(passwordInput, passwordConstraints.passwordLength);
  checkPasswordNumber(passwordInput, passwordConstraints.passwordNumber);
  checkPasswordUppercase(passwordInput, passwordConstraints.passwordUppercase);
  checkPasswordSpecial(passwordInput, passwordConstraints.passwordSpecialChar);
}

function passwordConfirmError() {
  const [passwordConfirmInput, errorMessage] = getInputMessage(passwordConfirmContainer);
  const [passwordInput, errorMessage2] = getInputMessage(passwordContainer);
  errorMessage.textContent = "";
  toggleSpan(passwordConfirmContainer, passwordConfirmInput);

  if ( passwordInput.value != passwordConfirmInput.value ) {
    errorMessage.textContent = "The passwords don't match!";
    passwordConfirmInput.classList.add("invalid-from-js");
  } else {
    errorMessage.textContent = "";
    passwordConfirmInput.classList.remove("invalid-from-js");
  }
}

/**
 * Add event listeners to important inputs etc. 
 */

emailContainer.querySelector("input").addEventListener("input", e => {
  emailError();
});

postalcodeContainer.querySelector("input").addEventListener("input", e => {
  postalcodeError();
});

passwordContainer.querySelector("input").addEventListener("input", e => {
  passwordError();
  //Show the user that the passwords don't match after changing the inital password
  passwordConfirmError();
});

passwordConfirmContainer.querySelector("input").addEventListener("input", e => {
  passwordConfirmError(); 
});

form.addEventListener("submit", e => {
  let submission = "You made it!";
  inputs.forEach(input => {
    if (input.classList.contains("invalid-from-js") || input.validity.valueMissing) {
      submission = "Some things ain't right nigga!";
    }
  })
  alert(submission);
  e.preventDefault()
});