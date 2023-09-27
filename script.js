// Assignment code here
function generatePassword()
{
  // Using a windows prompt to ask how many characters the user would like;
  // must be between 8 - 128
  var numChar = window.prompt("How many characters would you like to have?");
  // array of numChar; length must be <= 8 but <= 128

  // Using a windows confirm screen to ask if user would like symbols or not
  var includeSpecChars = window.confirm("Would you like to include symbols?");
  // array of includeSpecChars; needs random amount of symbols if OK

  // Using a windows confirm screen to ask if user would like lowercase letters or not
  var includeLowercase= window.confirm("Would you like to include lowercase letters?");
  // array of includeLowercase; needs random amount of lowercase letters if OK

  // Using a windows confirm screen to ask if user would like uppercase letters or not
  var includeUppercase = window.confirm("Would you like to include uppercase letters?");
  // array of includeUppercase; needs random amount of uppercase letters if OK

  // MUST HAVE AT LEAST ONE: symbols, lowercase, uppercase

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
