class Color {
  constructor(){
    this.locked = false;
  }
};


function getRandomColor() {
  var allCharacters = 'ABCDEF0123456789';
  var hex = '#';
  for (var i = 0; i < 6; i++) {
    hex = hex + allCharacters[Math.floor(Math.random() * 16)];
  }
  return hex;
}







//   //   function getRandomIndex(array) {
//   // return Math.floor(Math.random() * array.length);
// };

//  {
//   Math.floor(Math.random() * allCharacters.length).toString();
//   console.log(allCharacters)
// }
// console.log(allCharacters)
  //random hex code - 6 char 0-9, A-F,
  // A-F (6 letters), 0-9 (10 numbers)
  //var randomColor = Math.floor(Math.random()*16777215).toString(16);
  //   document.body.style.backgroundColor = "#" + randomColor;
  //   color.innerHTML = "#" + randomColor;
  // }
