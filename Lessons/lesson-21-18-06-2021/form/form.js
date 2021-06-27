// Variables
const inputs = document.querySelectorAll(".form__input");
const form = document.forms["myForm"];
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");

// Add listeners to each input
inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.classList.add("animate-border");
    input.placeholder = "";
  });

  input.addEventListener("focusout", () => {
    if (input.value) {
      if (validate()) {
        emailError.textContent = "";
        phoneError.textContent = "";
      }
    } else {
      emailError.textContent = "";
      phoneError.textContent = "";
    }

    input.classList.remove("animate-border");
    if (input.id === "email-input") {
      input.placeholder = "Email";
    } else {
      input.placeholder = "Phone number";
    }
  });
});

// Validation
// Submit parameter needed because of checking validation 
// on focusout in listeners above
function validate(submit = false) {
  const emailVal = form["email-input"].value;
  const phoneVal = form["phone-input"].value;
  const atpos = emailVal.indexOf("@");
  const dotpos = emailVal.lastIndexOf(".");

  if (atpos < 1 || dotpos - atpos < 2) {
    emailError.textContent = "Please enter valid email.";
    form["email-input"].focus();
    return false;
  } else if (Number.isNaN(Number(phoneVal))) {
    phoneError.textContent = "Plese enter valid phone number.";
    form["phone-input"].focus();
    return false;
  }

  if (submit) {
    alert("Well done!");
  }

  return true;
}
