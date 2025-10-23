const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;
  successMessage.textContent = "";

  // Clear previous errors
  document
    .querySelectorAll(".error-message")
    .forEach((el) => (el.textContent = ""));

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  // Validate name
  if (name.length < 3) {
    showError("name", "Name must be at least 3 characters long");
    isValid = false;
  }

  // Validate email
  if (!validateEmail(email)) {
    showError("email", "Enter a valid email address");
    isValid = false;
  }

  // Validate password
  if (password.length < 6) {
    showError("password", "Password must be at least 6 characters long");
    isValid = false;
  }

  // Confirm password
  if (password !== confirmPassword) {
    showError("confirmPassword", "Passwords do not match");
    isValid = false;
  }

  // Show success if valid
  if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
  }
});

function showError(inputId, message) {
  const input = document.getElementById(inputId);
  const error = input.nextElementSibling;
  error.textContent = message;
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
