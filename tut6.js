function calculate() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let op = document.getElementById("operation").value;
    switch (op) {
      case "add":
        document.getElementById("result").innerHTML =
          "Result: " + (parseInt(num1) + parseInt(num2));
        break;
      case "sub":
        document.getElementById("result").innerHTML =
          "Result: " + (parseInt(num1) - parseInt(num2));
        break;
      case "mul":
        document.getElementById("result").innerHTML =
          "Result: " + parseInt(num1) * parseInt(num2);
        break;
      case "div":
        document.getElementById("result").innerHTML =
          "Result: " + parseInt(num1) / parseInt(num2);
        break;
      default:
        document.getElementById("result").innerHTML =
          "Error computing result";
    }
  }