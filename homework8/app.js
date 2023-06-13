// Завдання 1

function upperCase(str) {
    if (str.test(/^[A-Z]/)) {
      return "String starts with uppercase character";
    } else {
      return "String does not start with uppercase character";
    }
  }

  // Завдання 2

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);
    return isValid;
}

// Завдання 3

const inputString = "Java Script";
const outputString = inputString.replace(/(\w+)\s+(\w+)/, "$2, $1");

console.log(outputString);

// Завдання 4

function validateCreditCardNumber(cardNumber) {
    const strippedNumber = cardNumber.replace(/-/g, "");
  
    if (/^\d{16}$/.test(strippedNumber)) {
      if (!/(\d)\1{15}/.test(strippedNumber)) {
        return true; 
      }
    }
    return false;
  }

// Завдання 5

function checkEmail(email) {
    const emailRegex = /^[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*@[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
  
    if (emailRegex.test(email)) {
      return "Email is correct!";
    } else {
      return "Email is not correct!";
    }
  }
  
  console.log(checkEmail("my_mail@gmail.com"));
  console.log(checkEmail("#my_mail@gmail.com"));
  console.log(checkEmail("my_ma--il@gmail.com"));
  
  // Завдання 6

  function checkLogin(login) {
    const loginRegex = /^[A-Za-z][A-Za-z0-9]{1,9}$/;
    const numbers = login.match(/\d+(\.\d+)?/g);
  
    if (loginRegex.test(login)) {
      console.log("Login is correct!");
    } else {
      console.log("Login is not correct!");
    }
  
    if (numbers !== null) {
      console.log("Numbers found: " + numbers.join(', '));
    } else {
      console.log("No numbers found.");
    }
  }
  