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

// Strings to hold possible characters of each type
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChars = "0123456789";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Generates new password
function generatePassword() {
  // Prompt for password length
  var pwLength = prompt("How many characters should the password have?", "8");
  
  // Check for correct length, otherwise end process
  if (pwLength < 8 || pwLength > 128) {
    alert("Your password must be 8 and 128 characters long.");
    return "";
  }

  // Confirm password length
  alert("Your password will be " + pwLength + " characters long.");


  // Prompt for character types to include
  // lowercase, uppercase, numeric, and/or special characters
  var pwTypes = prompt("Which character types should the password have?", "lowercase, uppercase, numeric, special");
  
  // Variables used to generate password
  var passwordChars = ""; // Possible characgters in password
  var password = []; // Final password returned
  var index = 0; // Index for selecting characters
  
  // Adds character types depending on user input to list of possible characters
  if (pwTypes.includes("lowercase")) {
    passwordChars += lowerChars;
  }
  if (pwTypes.includes("uppercase")) {
    passwordChars += upperChars;
  }
  if (pwTypes.includes("numeric")) {
    passwordChars += numChars;
  }
  if (pwTypes.includes("special")) {
    passwordChars += specialChars;
  }

  // Check at least one character type was chosen
  if (passwordChars.length === 0) {
    alert("You must include at least one character type.");
    return "";
  }

  // Confirm that password will contain specified types
  alert("Your password will have " + pwTypes + " character type(s).");

  // Generate password using a string of characters and a numeric length
  for (i = 0; i < pwLength; i++) {
    // Generate random number from zero to passwordChars length -1
    index = Math.floor(Math.random() * passwordChars.length);
    // Add character at index to end of password
    password.push(passwordChars.charAt(index));
  }

  // Returns string formed by combining the password array
  return password.join("");
}
