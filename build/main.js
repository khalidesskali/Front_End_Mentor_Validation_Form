const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validation()) {
    const successMessage = document.querySelector(".success");
    successMessage.style.display = "block";

    form.reset();

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);
  }
});

function validation() {
  let isValid = true;
  const firstName = document.querySelector(".first-name input");
  const nameReg = /^[a-zA-Z]+$/;

  if (!nameReg.test(firstName.value)) {
    showError(firstName);
    isValid = false;
  } else {
    clearError(firstName);
  }

  // Last Name
  const lastName = document.querySelector(".last-name input");

  if (!nameReg.test(lastName.value)) {
    showError(lastName);
    isValid = false;
  } else {
    clearError(lastName);
  }

  // Email
  const email = document.querySelector(".mail input");
  const mailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!mailReg.test(email.value)) {
    showError(email);
    isValid = false;
  } else {
    clearError(email);
  }

  // Check the types
  const types = document.querySelector(".type");
  const radios = document.querySelectorAll(
    ".custom-button input[type='radio']"
  );

  let check = false;
  radios.forEach((radio) => {
    if (radio.checked) {
      check = true;
      radio.style.borderColor = "var(--green-medium)";
    }
  });

  if (check) {
    types.nextElementSibling.style.display = "none";
  } else {
    types.nextElementSibling.style.display = "block";
    isValid = false;
  }

  // Check the Message field
  const message = document.querySelector("textarea");

  if (!message.value) {
    showError(message);
    isValid = false;
  } else {
    clearError(message);
  }

  // Check contact
  const contact = document.querySelector(".contact");
  const checkbox = document.querySelector(".contact input[type='checkbox']");

  if (checkbox.checked) {
    contact.nextElementSibling.style.display = "none";
  } else {
    contact.nextElementSibling.style.display = "block";
    isValid = false;
  }

  return isValid;
}

function showError(input) {
  input.nextElementSibling.style.display = "block";
  input.style.borderColor = "var(--error-color)";
}

function clearError(input) {
  input.nextElementSibling.style.display = "none";
  input.style.borderColor = "var(--grey-medium)";
}
