// Assignment code here
// generatePassword() function in all of its glory
function generatePassword()
{
  // genPW will be the password made from the user's input (how many chars, yes/no to symbols, lowercase, uppercase)
  var genPW = [];
  // finalPW will be the completed password based on the user's input
  var finalPW = "";
  // password to be returned from function
  var password = "";

  // Defining each of the elements that the user may or may not want
  var specSym = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "`", "|", "}", "{", "[", "]", ":", ";", "?", ">", "<", ",", ".", "/", "-", "="];
  var nums = ["0","1","2","3","4","5","6","7","8","9"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // Using a windows prompt to ask how many characters the user would like
  var numChar = window.prompt("How many characters would you like to have? (Must be between 8 - 128)");
  // numChar; length must be <= 8 but <= 128
  if (numChar >= 8 && numChar <= 128)
  {
    console.log("Number of characters: " + numChar)
  }
  // Requests firmly that the user enters a numerical amount between 8 - 128 if they didn't the first time
  else 
  {
    console.log("Please enter between 8 - 128 characters: ");
    numChar = window.prompt("Please enter between 8 - 128 characters: ");
  }

  // Using a windows confirm screen to ask if user would like symbols or not
  var includeSpecChars = window.confirm("Would you like to include symbols?");
  // includeSpecChars; needs random amount of symbols if OK
  if(includeSpecChars)
  {
    console.log("Special characters added.");
    genPW = genPW.concat(specSym);
  }
  // Cancel
  else
  {
    console.log("No special characters.");
  }

  // Using a windows confirm screen to ask if user would like numbers or not
  var includeNumbers = window.confirm("Would you like to include numbers?");
  // includeNumbers; needs random amount of numbers if OK
  if(includeNumbers)
  {
    console.log("Numbers added.");
    genPW = genPW.concat(nums);
  }
  // Cancel
  else
  {
    console.log("No numbers.");
  }

  // Using a windows confirm screen to ask if user would like lowercase letters or not
  var includeLowercase = window.confirm("Would you like to include lowercase letters?");
  // includeLowercase; needs random amount of lowercase letters if OK
  if(includeLowercase)
  {
    console.log("Lowercase letters added.");
    genPW = genPW.concat(lowerCase);
  }
  // Cancel
  else
  {
    console.log("No lowercase letters.");
  }

  // Using a windows confirm screen to ask if user would like uppercase letters or not
  var includeUppercase = window.confirm("Would you like to include uppercase letters?");
  // includeUppercase; needs random amount of uppercase letters if OK
  if(includeUppercase)
  {
    console.log("Uppercase letters added.");
    genPW = genPW.concat(upperCase);
  }
  // Cancel
  else
  {
    console.log("No uppercase letters.");
  }

  // Generate password based on criteria and add into "password" to return
  for(var i = 0; i < numChar; i++)
  {
    finalPW = finalPW.concat(genPW[Math.floor(Math.random() * genPW.length)]);
    password += finalPW[i];
  }

  // Checks to see if one of these options were chosen (MUST HAVE AT LEAST ONE)
  if (includeSpecChars || includeLowercase || includeUppercase || includeNumbers)
  {
    console.log("Password meets criteria.");
    // Return password
    console.log(password);
    return password;
  }

  // Will have to start process over if user hit 'Cancel' on all options after entering number of characters
  else
  {
    console.log("Password needs at least one of: symbols, numbers, lowercase, or uppercase.");
    alert("Password needs at least one of: symbols, numbers, lowercase, or uppercase.");
  }
}

// Code already here 
// ---------------------------------------------------------------------------------------------------------------------------
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
