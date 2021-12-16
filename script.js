// Assignment code here
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharChar = ["!", "@", "#", "$", "%", "&", "*"];
// might have to write a function to declare random numbers from 0 - 128
var numeric = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// start defining function
var getPreference = function() {
    console.log("function working")

    var length = parseInt(prompt("How many characters?"));
    console.log(length);
    var lowerCase = confirm("Do you want lower case");
    var upperCase = confirm("Do you want upper case?");
    var specialCharacters = confirm("Do you want to use special characters?");
    var numeric = confirm("Do you want numbers?");
    
    var preferencesObj = {
        length: length,
        lowerCase: lowerCase,
        upperCase: upperCase,
        specialCharacters: specialCharacters,
        numeric: numeric

    }

    return preferencesObj;
}

// define generate password
var generatePassword = function() {
    var userPreference = getPreference();
    console.log(userPreference);
    // create a varible for possible characters based on user preferences
    var possibleCharacters = [];
    var generatedPassword = [];
    
    return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);