//when click new palette, don't create new instance of palette, instead current palette regenerates unlocked colors
// You only replace that instance of Palette when "Save Palette" is clicked.
// You'll always have a Palette instance.
// When a user clicks New Palette, we have our current Palette instance replace unlocked colors; those new Colors get displayed to the user.
// It's only when a user clicks Save Palette that we do something with the current Palette instance to save it in our data model, and generate a new Palette instance with it's own instances of Color

//should have 5 colors, each paletee has unique ID (Date.now?)

//can we use palette to instantiate set of 5 Colors
//array of colors method call
class Palette {
  constructor(c1, c2, c3, c4, c5) {
    this.colors = [
      c1, c2, c3, c4, c5
      // new Color(),
      // new Color(),
      // new Color(),
      // new Color(),
      // new Color(),
    ];
    this.id = Date.now();
  }
}

//incorporate newpalette.colors with display?
//this.colors = [new Color()]
//when instantiate palette, expect palette to have colors property - 5 Color objects which are newly instantiated

    //how get hexcode over to palette class and display in one box?
    //then can loop
    //then lock
    //bring hexcode over from Color
    //on page reload, randomize colors, locked do not need to persist
    //lock/unlock hex code(event listener)
    //when locked, keep in position
    //randomize unlocked when click new random palette button
    //loop to check through if locked/unlocked
    //
