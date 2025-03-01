function validate() {
  event.preventDefault();
  const password = document.getElementById("password").value;
  const user = document.getElementById("username").value;
  const minLength = 8;
  const message = document.getElementById("result");
  const upperCase = /[A-Z]/.test(password);
  const lowerCase = /[a-z]/.test(password);
  const number = /\d/.test(password);
  const special = /[!@#\$%\^\&*\)\(+=._-]/.test(password);
  message.className = "error";
  if (!user) {
    message.textContent = "Enter username";
  } else if (password.length < minLength) {
    message.textContent = "Password must be atleast 8 letters.";
  } else if (!upperCase) {
    message.textContent = "Password must contain atleast one uppercase letter.";
  } else if (!lowerCase) {
    message.textContent = "Password must contain atleast one lowercase letter.";
  } else if (!number) {
    message.textContent = "Password must contain atleast one number.";
  } else if (!special) {
    message.textContent =
      "Password must contain atleast one special character.";
  } else {
    message.textContent = "Password is valid!";
    message.className = "success";
    return true;
  }
  return false;
}
