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
  var pwTypes = prompt("Which character types should the password have?", "lowercase,uppercase,numeric,special");
  confirm("Your password will have " + pwTypes + " character type(s).");

  var capChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";


  return "PaSsWoRd";
}
