// chores/0-initial-page-layout
// feature/0-initial-page-layout
// feature/1-create-classes
// feature/2-show-random-palette
// feature/3-save-palette
// feature/4-lock-colors
// feature/5-delete-saved-palette
// feature/initial-readme
// extensions if we have time

//QUERY SELECTORS//
var square1 = document.querySelector("#boxOne");
var square2 = document.querySelector("#boxTwo");
var randomButton = document.querySelector(".random-button");
var allBoxes = document.querySelectorAll(".box");
var hexCodes = document.querySelector(".hex-code");
var colorBlocks = document.querySelectorAll(".color-block");


//EVENT LISTENERS//
window.addEventListener("load", getNewPalette);
randomButton.addEventListener("click", getNewPalette);

function getNewPalette(){
  var newPalette = new Palette()
  //for loop over every color in palette and
    square1.style.backgroundColor = newPalette.colors[0].hex
};
// event.preventDefault();

//FUNCTIONS//
// function insertHex() {
//   colorBlocks.innerHTML = getRandomColor()
// };
//window load new palette instantiate
var newPalette = new Palette();
console.log(newPalette.colors);

//on button click iterate through all colors in palette, and attach them to boxes
  // allBoxes[i].style.backgroundColor = hex;
// palette.colorid style background
// function insertColors(){
// for (var i = 0; i < allBoxes.length; i++)
// }
