// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var password;

//Generate and return the password pool
function generatePassPool() {
  var passPool = "";
  var numbers = "0123456789";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var special = "!@#$%^&*()-_=+`~?/;:\\\'\"";

  while(passPool === "") {

    // Ask what types of characters to use in the password, and add chosen characters to password pool. Add random character of the chosen type to the password.
    if(window.confirm("Do you want to use numbers?")) {
      passPool += numbers;
      password += numbers[Math.floor(Math.random() * numbers.length)];
    }

    if(window.confirm("Do you want to use lowercase letters?")) {
      passPool += letters;
      password += letters[Math.floor(Math.random() * letters.length)];
    }

    if(window.confirm("Do you want to use uppercase letters?")) {
      passPool += letters.toUpperCase();
      password += letters[Math.floor(Math.random() * letters.length)].toUpperCase();
    }
    
    if(window.confirm("Do you want to use special characters?")) {
      passPool += special;
      password += special[Math.floor(Math.random() * special.length)];
    }

    // If no character types are chosen, notify user before looping to prompt for character types again
    if(passPool === "") {
      window.alert("You need to pick at least one set of characters to use for your password!");
    }
  }
  
  return passPool;
}

// Shuffle the password string to distribute guaranteed characters
function shufflePassword() {
  // Convert the password string to an array
  var arrayPass = password.split("");
  var shufflePass = "";
  var i;

  // Loop to randomly select elements from the array and add them to shufflePass before removing from the array
  while (arrayPass.length > 0) {
    i = Math.floor(Math.random() * arrayPass.length);
    shufflePass += arrayPass.splice(i, 1);
  }

  // Save shufflePass as new password
  password = shufflePass;
}

// Generate the password
function generatePassword() {
  var passLength;
  password = "";

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

  // Generate the rest of the password following given criteria
  while (password.length < passLength){
    password += passPool[Math.floor(Math.random() * passPool.length)];
  }

  // Call to shuffle the generated password to prevent guaranteed characters from being frontloaded
  shufflePassword();

  // Return generated password
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;

  // Add note to click password field to copy generated password if not already visible
  var copyText = document.querySelector("#copyText");
  if (copyText.dataset.state === "hidden") {
    copyText.dataset.state = "show"
    copyText.textContent = "Click the password box to copy your new password!";
  }
}

// Function to copy generated password if you click the box
function copyPassword() {
  // Select the text field
  passwordText.select();
  passwordText.setSelectionRange(0, 127); // For mobile devices

  // Copy the password text
  document.execCommand("copy");

  // Alert that the text has been copied
  alert("Copied the password " + passwordText.value + " to clipboard");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to copy text if password box is clicked
passwordText.addEventListener("click", copyPassword);