// Assignment Code

var char = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklnmopqrstuvwxyz",
 "0123456789", "~!@#$%^&*()-_=+"];
var userInput = [];
var password = "";
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
    var characterLength = 0
    while ((characterLength < 8 || characterLength > 128) || Number.isInteger(characterLength) === false) {
        characterLength = parseInt(prompt("How many characters would you like your password to be? (8-128)"));
    }

    function writePassword() {
      password = generatePassword();
      var passwordText = document.querySelector("#password");
  
      passwordText.value = password;
  }

    var upper = false
    var lower = false
    var number = false
    var symbol = false

    while (!upper && !lower && !number && !symbol) {

        
        upper = confirm("Click OK for uppercase characters");

        
        lower = confirm("Click OK for lowercase characters");

       
        number = confirm("Click OK for numeric characters");

        
        symbol = confirm("Click OK for special characters");
    }

    if (upper) {
        userInput.push(char[0]);
    }

    if (lower) {
        userInput.push(char[1])
    }

    if (number) {
        userInput.push(char[2])
    }

    if (symbol) {
        userInput.push(char[3])
    }

    var password = "";

    userInput = userInput.join("").split("");

    for (var i = 0; i < characterLength; i++) {
        var index = (Math.floor(Math.random() * userInput.length));
        password = password + userInput[index]
    }

    return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

