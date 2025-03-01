function calculate() {
  let dob = new Date(document.getElementById("dob").value);
  let currdate = new Date(document.getElementById("currdate").value);
  let month = currdate.getMonth();
  if (month - dob.getMonth() > 0) {
    document.getElementById("age").innerHTML = `${
      currdate.getFullYear() - dob.getFullYear()
    } years old`;
  } else if (month - dob.getMonth() <= 0) {
    document.getElementById("age").innerHTML = `${
      currdate.getFullYear() - dob.getFullYear() - 1
    } years old`;
  }
}
