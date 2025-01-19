const email = document.getElementById("email-form");
const submit = document.getElementById("btn-submit");

const message_error = document.getElementById("message-error");
const logo_error = document.getElementById("error-logo");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (ValidateEmail(email.value)) {
    Information_Error(ValidateEmail(email.value));
  } else {
    Information_Error(ValidateEmail(email.value));
  }
});

const ValidateEmail = (email) => {
  const reference = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return reference.test(email);
};

const Information_Error = (status) => {
  if (status) {
    logo_error.style.display = "none";
    message_error.innerText = "";
    email.classList.remove("show-error");
  } else {
    logo_error.style.display = "inline-block";
    message_error.innerText = "Please provide a valid email";
    email.classList.add("show-error");
  }
};
