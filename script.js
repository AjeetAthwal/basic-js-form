const form = document.querySelector("form");

const email = form.querySelector("#email");
const emailError = form.querySelector("#email + .error");

const country = form.querySelector("#country");
const countryError = form.querySelector("#country + .error");

const zipcode = form.querySelector("#zipcode");
const zipcodeError = form.querySelector("#zipcode + .error");

const password = form.querySelector("#password");
const passwordError = form.querySelector("#password + .error");

const passwordConfirmation = form.querySelector("#password-confirmation");
const passwordConfirmationError = form.querySelector(
  "#password-confirmation + .error"
);

const checkEmail = (e) => {
  if (email.validity.typeMismatch) {
    const errorMessage = "Not in the correct email address formats";
    email.setCustomValidity(errorMessage);
    emailError.textContent = errorMessage;
  } else {
    email.setCustomValidity("");
    emailError.textContent = "";
  }
};

const checkCountry = (e) => {
  if (country.validity.patternMismatch) {
    const errorMessage = "Please choose either USA or Canada";
    country.setCustomValidity(errorMessage);
    countryError.textContent = errorMessage;
  } else {
    country.setCustomValidity("");
    countryError.textContent = "";
  }
};

const checkZipcode = (e) => {
  if (zipcode.validity.patternMismatch) {
    const errorMessage = "ZIP Code must be a 5 digit number";
    zipcode.setCustomValidity(errorMessage);
    zipcodeError.textContent = errorMessage;
  } else {
    zipcode.setCustomValidity("");
    zipcodeError.textContent = "";
  }
};

const checkPassword = (e) => {
  if (password.validity.tooShort) {
    const errorMessage = "Password is too short";
    password.setCustomValidity(errorMessage);
    passwordError.textContent = errorMessage;
  } else {
    password.setCustomValidity("");
    passwordError.textContent = "";
  }

  if (password.value !== passwordConfirmation.value) {
    const errorMessage = "Passwords do not match";
    passwordConfirmation.setCustomValidity(errorMessage);
    passwordConfirmationError.textContent = errorMessage;
  } else {
    passwordConfirmation.setCustomValidity("");
    passwordConfirmationError.textContent = "";
  }
};

const submitForm = (e) => {
  e.preventDefault();
  console.log("passed!");
};

form.addEventListener("submit", submitForm);
email.addEventListener("input", checkEmail);
country.addEventListener("input", checkCountry);
zipcode.addEventListener("input", checkZipcode);
password.addEventListener("input", checkPassword);
passwordConfirmation.addEventListener("input", checkPassword);
