// feature/3-save-palette
// feature/4-lock-colors
// feature/5-delete-saved-palette
// feature/initial-readme
// extensions if we have time

//querySelectorAll grabs ALL elements and stores them in the variable as an array
//GLOBAL VARIABLES//
var newPalette = new Palette();
var savedPalettes = [];

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
var saveButton = document.querySelector(".save-button");
var lockImages = document.querySelectorAll(".lock");
var sideBar = document.querySelector(".side-bar");

//EVENT LISTENERS//
window.addEventListener("load", getNewPalette);
randomButton.addEventListener("click", getNewPalette);
saveButton.addEventListener("click", function() {
  savePalette()
});
// saveButton.addEventListener("click", displayMiniPalette);

// //FUNCTIONS//
//click random, unique id needs to be tied to generated five hex code colors, 1 palette = 1 id, 5 hex codes, if click save, that unique id needs to go into array of saved palettes

function getRandomColor() {
  var allCharacters = 'ABCDEF0123456789';
  var hex = '#';
  for (var i = 0; i < 6; i++) {
    hex = hex + allCharacters[Math.floor(Math.random() * 16)]
  } return new Color(hex);
};

function getNewPalette() {
  var color1 = getRandomColor();
  var color2 = getRandomColor();
  var color3 = getRandomColor();
  var color4 = getRandomColor();
  var color5 = getRandomColor();
  newPalette = new Palette(color1, color2, color3, color4, color5);
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
}
// event.preventDefault();

function savePalette() {
  // var newPalette = new Palette();
  var something = new Palette(newPalette.colors[0], newPalette.colors[1], newPalette.colors[2], newPalette.colors[3], newPalette.colors[4]);
  return savedPalettes.push(something);
 }


console.log(newPalette);
console.log(newPalette.colors);
console.log(savedPalettes);

// function savePalette(){
//   // hide(lockImages);
//   // hide(hexCodes);
//   savedPalettes.push(palette);
//   palette = new Palette;
//   //NEXT: Need to take the saved array and display array, hooray, and yay...in css
// };

// function displayMiniPalette(){
// savedPalettes.style = palette.colors[0];
// savedPalettes.style = palette.colors[1];
// }


// function show(element) {
//   element.classList.remove("hidden");
// };
//
// function hide(element) {
//   element.classList.add("hidden");
// };


//savedPalettes
// function savePalette() {
//   sideBar.innerHTML = "";
//   for (var i = 0; i < allBoxes.length; i ++) { allBoxes.innerHTML +=
//   `<article class="side-bar">
//     <h2 class="saved-palettes">Saved Palettes</h2>
//     <section>
//       <div class = "display-palettes"> </div>
//       <button class="delete-button hidden">DELETE</button>
//     </section>
//   </article>`
//   savedPalettes.push(palette)
//  }
// }


//on button click iterate through all colors in palette, and attach them to boxes
// allBoxes[i].style.backgroundColor = hex;
// palette.colorid style background
// function insertColors(){
// for (var i = 0; i < allBoxes.length; i++)
// }
