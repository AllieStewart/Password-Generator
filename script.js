// Assignment code here
// generatePassword() function in all of its glory
function generatePassword() {
  const characterSets = {
    specSym: "!@#$%^&*()_+~`|{}[]:;?<>,./*-=",
    nums: "0123456789",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  };

  // Prompt for password length
  let numChar = prompt("How many characters would you like? (8-128)");
  while (!numChar || numChar < 8 || numChar > 128) {
    numChar = prompt("Please enter between 8 and 128 characters:");
  }

  // Gather character set preferences
  const selectedSets = {};
  for (const setName in characterSets) {
    const include = confirm(`Include ${setName}?`);
    selectedSets[setName] = include ? characterSets[setName] : "";
  }

  // Check if at least one set is selected
  if (Object.values(selectedSets).every(set => set === "")) {
    alert("Must choose at least one character set!");
    return; // Abort if no sets selected
  }

  // Combine selected sets into a single string
  const allChars = Object.values(selectedSets).join("");

  // Generate password
  let password = "";
  for (let i = 0; i < numChar; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
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
