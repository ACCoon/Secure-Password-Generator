// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generate and return the password pool
function generatePassPool() {
  var passPool = "";
  var letters = "abcdefghijklmnopqrstuvwxyz";

  while(passPool === "") {

    // Ask what types of characters to use in the password, and add chosen characters to password pool
    if(window.confirm("Do you want to use numbers?")) {
      passPool += "0123456789";
    }

    if(window.confirm("Do you want to use lowercase letters?")) {
      passPool += letters;
    }

    if(window.confirm("Do you want to use uppercase letters?")) {
      passPool +=letters.toUpperCase();
    }
    
    if(window.confirm("Do you want to use special characters?")) {
      passPool += "!@#$%^&*()-_=+`~?/\\\'\"";
    }

    // If no character types are chosen, notify user before looping to prompt for character types again
    if(passPool === "") {
      window.alert("You need to pick at least one set of characters to use for your password!");
    }
  }
  
  return passPool;
}

// Generate the password
function generatePassword() {
  var password;
  var passPool = generatePassPool();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
