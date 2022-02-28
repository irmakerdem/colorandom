// GLOBAL VARIABLES
var newPalette = new Palette();
var savedPalettes = [];

// QUERY SELECTORS
var square1 = document.querySelector("#boxOne");
var square2 = document.querySelector("#boxTwo");
var square3 = document.querySelector("#boxThree");
var square4 = document.querySelector("#boxFour");
var square5 = document.querySelector("#boxFive");
var randomButton = document.querySelector(".random-button");
var hexCodes = document.querySelectorAll(".hex-code");
var saveButton = document.querySelector(".save-button");
var sideBar = document.querySelector(".side-bar");
var lock = document.querySelectorAll(".lock");
var colorSection = document.querySelector(".color-section");

// EVENT LISTENERS
window.addEventListener("load", getNewPalette);
randomButton.addEventListener("click", getNewPalette);
saveButton.addEventListener("click", function () {
  savePalette();
  addHTML();
});
colorSection.addEventListener("click", function (event) {
  lockColor(event);
});

// FUNCTIONS
function getRandomColor() {
  var allCharacters = "ABCDEF0123456789";
  var hex = "#";
  for (var i = 0; i < 6; i++) {
    hex = hex + allCharacters[Math.floor(Math.random() * 16)];
  }
  return new Color(hex);
};

function getNewPalette() {
  var color1 = getRandomColor();
  var color2 = getRandomColor();
  var color3 = getRandomColor();
  var color4 = getRandomColor();
  var color5 = getRandomColor();
  newPalette.colors = [color1, color2, color3, color4, color5];
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

function savePalette() {
  var saveCurrent = new Palette(
    newPalette.colors[0],
    newPalette.colors[1],
    newPalette.colors[2],
    newPalette.colors[3],
    newPalette.colors[4]
  );
  savedPalettes.push(saveCurrent);
};

function addHTML() {
  sideBar.innerHTML += `<section class="display">
    <div class="little-sections" style="background-color:${newPalette.colors[0].hex}"></div>
    <div class="little-sections" style="background-color:${newPalette.colors[1].hex}"></div>
    <div class="little-sections" style="background-color:${newPalette.colors[2].hex}"></div>
    <div class="little-sections" style="background-color:${newPalette.colors[3].hex}"></div>
    <div class="little-sections" style="background-color:${newPalette.colors[4].hex}"></div>
    <button class="delete-button">Delete</button>
  </section>`
};

function lockColor(event) {
  var id = parseInt(event.target.dataset.index);
  if (newPalette.colors[id].locked) {
    newPalette.unlock(id);
    lock[id].style.content = "url(./images/unlocked.png)";
  } else {
    newPalette.lock(id);
    lock[id].style.content = "url(./images/locked.png)";
  }
};
