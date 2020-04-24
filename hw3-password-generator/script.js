// Random Functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecial() {
  var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  return symbols[Math.floor(Math.random() * symbols.length)];
}

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecial
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  var lengthPrompt = prompt("Length of password? (8-128 characters)");
    if (lengthPrompt < 8 || lengthPrompt > 128) {
    alert("Length needs to be at least 8 characters and no more than 128 characters.")
    }
    else {
    var lowercaseConfirm = confirm("Include lowercase?");
    var uppercaseConfirm = confirm("Include uppercase?");
    var numberConfirm = confirm("Include numbers?");
    var specialConfirm = confirm("Include special characters?");

    typesCount = lowercaseConfirm + uppercaseConfirm + numberConfirm + specialConfirm;
      if (typesCount === 0) {
        alert ("Please choose at least one criteria.");
      }
      else {generatePassword (lengthPrompt, lowercaseConfirm, uppercaseConfirm, numberConfirm, specialConfirm)}
    }
});

// Generate Password Function
function generatePassword (length, lower, upper, number, special) {
  let generatedPassword = "";

  const typesArr = [{lower}, {upper}, {number}, {special}].filter(item => Object.values(item)[0]);

  console.log("typesArr: ", typesArr);

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  console.log (finalPassword);

  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;
}




