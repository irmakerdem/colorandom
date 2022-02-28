// feature/4-lock-colors
// feature/5-delete-saved-palette
// feature/initial-readme
// extensions if we have time

var newPalette = new Palette();
var savedPalettes = [];

var square1 = document.querySelector("#boxOne");
var square2 = document.querySelector("#boxTwo");
var square3 = document.querySelector("#boxThree");
var square4 = document.querySelector("#boxFour");
var square5 = document.querySelector("#boxFive");
var randomButton = document.querySelector(".random-button");
var hexCodes = document.querySelectorAll(".hex-code");
var saveButton = document.querySelector(".save-button");
var sideBar = document.querySelector(".side-bar");
var lock = document.querySelector(".lock");
var colorBlock = document.querySelectorAll(".color-block");
var colorSection = document.querySelector(".color-section");
var colorBlockOne = document.querySelector("#colorBlockOne");

window.addEventListener("load", getNewPalette);
randomButton.addEventListener("click", getNewPalette);
saveButton.addEventListener("click", function() {
  savePalette()
  addHTML()
});
colorSection.addEventListener("click", function(event) {
  lockColor(event)
//boss function here ^
});

function getRandomColor() {
  var allCharacters = 'ABCDEF0123456789';
  var hex = '#';
  for (var i = 0; i < 6; i++) {
    hex = hex + allCharacters[Math.floor(Math.random() * 16)]
  } return new Color(hex);
};

//ALEX's NOTES //
//only have get new palette function on load
//then create new function for new palette that checks for unlocked, then splice color out
// OR change palette class so it generates new colors in palette class

function getNewPalette() {
  var color1 = getRandomColor();
  var color2 = getRandomColor();
  var color3 = getRandomColor();
  var color4 = getRandomColor();
  var color5 = getRandomColor();
  newPalette.colors = [color1, color2, color3, color4, color5];
//   for(var i = 0; i < 5; i++){
//     console.log(newPalette.colors);
//   if(!newPalette.colors[0].locked){
//   newPalette.colors.splice(i, 1, new Color)
//   }
// }
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
  var saveCurrent = new Palette(newPalette.colors[0], newPalette.colors[1], newPalette.colors[2], newPalette.colors[3], newPalette.colors[4]);
  savedPalettes.push(saveCurrent);
 }

function addHTML() {
  sideBar.innerHTML +=
  `<section class="display">
    <div class="little-sections" style="background-color:${newPalette.colors[0].hex}"></div>
    <div class="little-sections" style="background-color:${newPalette.colors[1].hex}"></div>
    <div class="little-sections" style="background-color:${newPalette.colors[2].hex}"></div>
    <div class="little-sections" style="background-color:${newPalette.colors[3].hex}"></div>
    <div class="little-sections" style="background-color:${newPalette.colors[4].hex}"></div>
    <button class="delete-button">Delete</button>
  </section>`;
 }

 function lockColor(event){
   newPalette.giveIDs()
   //loop, go through all boxes, if this target event was clicked, changed locked - true,
   console.log(event.target.closest(".color-block").id, newPalette.colors[0].id);
   for (var i = 0; i < 5; i++){
     if (event.target.closest(".color-block").id ===       newPalette.colors[i].id) {
        newPalette.colors[i].locked = true
        console.log(newPalette);
        lock.style.content = "url(./images/locked.png)"
   // }
 } //HEY!!!! move to palette class and add unlock method
   //parse int -takes string and makes into a number
}
}


//assign each color w id, match place on page/in html w id 0-4
//if ids match, lock or unlock
//option 1- checks if unlocked or locked then runs the appropriate function
//option2- lock function turns into method w/in palette class, unlock() and
