// feature/1-create-classes
// feature/2-show-random-palette
// feature/3-save-palette
// feature/4-lock-colors
// feature/5-delete-saved-palette
// feature/initial-readme
// extensions if we have time

//querySelectorAll grabs ALL elements and stores them in the variable as an array

//QUERY SELECTORS//
var square1 = document.querySelector("#boxOne");
var square2 = document.querySelector("#boxTwo");
var square3 = document.querySelector("#boxThree");
var square4 = document.querySelector("#boxFour");
var square5 = document.querySelector("#boxFive");
var randomButton = document.querySelector(".random-button");
var allBoxes = document.querySelectorAll(".box");
var hexCodes = document.querySelectorAll(".hex-code");
var colorBlocks = document.querySelectorAll(".color-block");


//EVENT LISTENERS//
window.addEventListener("load", getNewPalette);
randomButton.addEventListener("click", getNewPalette);

function getNewPalette(){
  var newPalette = new Palette()
  //for loop over every color in palette and
    square1.style.backgroundColor = newPalette.colors[0].hex;
    square2.style.backgroundColor = newPalette.colors[1].hex;
    square3.style.backgroundColor = newPalette.colors[2].hex;
    square4.style.backgroundColor = newPalette.colors[3].hex;
    square5.style.backgroundColor = newPalette.colors[4].hex;

    hexCodes[0].innerText = newPalette.colors[0].hex;
    hexCodes[1].innerText = newPalette.colors[1].hex;
    hexCodes[2].innerText = newPalette.colors[2].hex;
    hexCodes[3].innerText = newPalette.colors[3].hex;
    hexCodes[4].innerText = newPalette.colors[4].hex;
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
