class Palette {
  constructor(color1, color2, color3, color4, color5) {
    this.colors = [color1, color2, color3, color4, color5];
    this.id = Date.now();
  }
  giveIDs(){
    //give Ids to colors in new palette that match html id for colorblock, index =
    var colorBlockIDs = ["colorBlockOne", "colorBlockTwo", "colorBlockThree", "colorBlockFour", "colorBlockFive"]
    for(var i = 0; i < 5; i++){
    this.colors[i].id = colorBlockIDs[i];
  }
 }
}
