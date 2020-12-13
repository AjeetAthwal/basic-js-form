const form = document.querySelector("form");

const email = form.querySelector("#email");
const country = form.querySelector("#country");
const zipcode = form.querySelector("#zipcode");
const password = form.querySelector("#password");
const passwordConfirmation = form.querySelector("#password-confirmation");

const checkEmail = (e) => {
  if (email.validity.typeMismatch)
    email.setCustomValidity("Not in the correct email address formats");
  else email.setCustomValidity("");
};

const checkCountry = (e) => {
  if (country.validity.patternMismatch)
    country.setCustomValidity("Please choose either USA or Canada");
  else country.setCustomValidity("");
};

const checkZipcode = (e) => {
  if (zipcode.validity.patternMismatch)
    zipcode.setCustomValidity("ZIP Code must be a 5 digit number");
  else zipcode.setCustomValidity("");
};

const checkPassword = (e) => {
  if (password.validity.tooShort)
    password.setCustomValidity("Password is too short");
  else password.setCustomValidity("");

  if (password.value !== passwordConfirmation.value)
    passwordConfirmation.setCustomValidity("Passwords do not match");
  else passwordConfirmation.setCustomValidity("");
};

const submitForm = (e) => {
  e.preventDefault();
  if (!email.validity.valid) console.log("err");
  console.log(e.target.elements);
};

form.addEventListener("submit", submitForm);
email.addEventListener("input", checkEmail);
country.addEventListener("input", checkCountry);
zipcode.addEventListener("input", checkZipcode);
password.addEventListener("input", checkPassword);
passwordConfirmation.addEventListener("input", checkPassword);
