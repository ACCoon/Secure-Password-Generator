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
  var passLength;
  var password = "";

  // Get and validate passLength, if invalid then loop
  do {
    // Prompt for length of the password to generate, parse as Integer
    passLength = parseInt(window.prompt("How long do your want your password to be? It must be between 8 and 128 characters long.", 8));

    // Show alert warning if passLength is not a number between 8 and 128
    if(isNaN(passLength) || passLength < 8 || passLength > 128){
      window.alert("You must enter a number between 8 and 128.");
    }

  } while(isNaN(passLength) || passLength < 8 || passLength > 128);
  
  // Call to generate character pool for password
  var passPool = generatePassPool();

  // Generate password following given criteria
  for (i = 0; i < passLength; i++){
    password += passPool[Math.floor(Math.random() * (passPool.length - 1))];
  }

  // Return generated password
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
