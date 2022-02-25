class Color {
  constructor() {
    this.locked = false;
    this.hex = this.getRandomColor();
  }
  getRandomColor() {
    var allCharacters = 'ABCDEF0123456789';
    var hex = '#';
    for (var i = 0; i < 6; i++) {
      hex = hex + allCharacters[Math.floor(Math.random() * 16)]
    } return hex
  }
};

//
// lockColors(){
//   //if color.unlocked = true, can run get randomColor
// };
