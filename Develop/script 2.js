var chacterLength = 8
var choiceArr = []

var specialCharactersArr = ["!","@","#","$","%","^","&","*","(",")","[","]","{","}","|","?","/","<",">",".",]
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numberArr = ["1","2","3","4","5","6","7","8","9","0"]




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();
    var passwordText = document.querySelector("#password");

    if (correctPrompts) {
      var newPassword = generatePassword();
      passwordText.value = newPassword;
    }else {
      

    }
  
}

function generatePassword(){
  var password = "";
  for (var i = 0; i < chacterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex]
  }
  return password;
}

function getPrompts() {
  choiceArr = [];

  chacterLength = parseInt(prompt("Password Length"));

  if (isNaN(chacterLength) || chacterLength < 8 || chacterLength > 128) {
    alert("Number must be between 8 and 128. Please try again.");
    return false;
  }
  if (confirm("Lowercase Letters")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Uppercase Letters")) {
    choiceArr = choiceArr.concat(upperCase);
  }
  if (confirm("Special Characters")){
    choiceArr = choiceArr.concat(specialCharactersArr);
  }
  if (confirm("Numbers")){
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}


 



