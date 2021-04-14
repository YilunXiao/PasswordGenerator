// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Generates new password
function generatePassword() {
  // Prompt for password length
  var pwLength = prompt("How many characters should the password have?", "8");
  confirm("Your password will be " + pwLength + " characters long.");

  // Prompt for character types to include
  // lowercase, uppercase, numeric, and/or special characters
  var pwTypes = prompt("Which character types should the password have?", "lowercase, uppercase, numeric, special");
  confirm("Your password will have " + pwTypes + " character type(s).");
  // var pwTypesArray = pwTypes.split(",");

  // Character options
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numChars = "0123456789";
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var passwordChars = "";
  var password = [];
  var index;
  

  // Adds character types depending on user input
  if (pwTypes.includes("lowercase")) {
    passwordChars = passwordChars.concat(lowerChars);
  }
  if (pwTypes.includes("uppercase")) {
    passwordChars = passwordChars.concat(upperChars);
  }
  if (pwTypes.includes("numeric")) {
    passwordChars = passwordChars.concat(numChars);
  }
  if (pwTypes.includes("special")) {
    passwordChars = passwordChars.concat(specialChars);
  }


  for (i = 0; i < pwLength; i++) {
    // Generate random number from zero to passwordChars length
    index = Math.floor(Math.random() * passwordChars.length);
    // Add character at index to password array
    password.push(passwordChars.charAt(index));
  }

  return password.join("");
}
