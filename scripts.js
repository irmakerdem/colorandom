// chores/0-initial-page-layout
// feature/0-initial-page-layout
// feature/1-create-classes
// feature/2-show-random-palette
// feature/3-save-palette
// feature/4-lock-colors
// feature/5-delete-saved-palette
// feature/initial-readme
// extensions if we have time


// var displayColor =



//QUERY SELECTORS//
var square1 = document.querySelector("#boxOne");
var randomButton = document.querySelector(".random-button");
var allBoxes = document.querySelectorAll(".box");
var hexCodes = document.querySelector(".hex-code");
var colorBlocks = document.querySelector(".color-block")
//EVENT LISTENERS//
window.addEventListener("load", getRandomColor);
randomButton.addEventListener("click", getRandomColor);


//FUNCTIONS//
function insertHex() {
  colorBlocks.innerHTML = getRandomColor()
};

function getRandomColor() {
  event.preventDefault();
  var allCharacters = 'ABCDEF0123456789';
  var hex = '#';
  for (var i = 0; i < 6; i++) {
    hex = hex + allCharacters[Math.floor(Math.random() * 16)];
  }
};
