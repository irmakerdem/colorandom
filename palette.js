//when click new palette, don't create new instance of palette, instead current palette regenerates unlocked colors
// You only replace that instance of Palette when "Save Palette" is clicked.
// You'll always have a Palette instance.
// When a user clicks New Palette, we have our current Palette instance replace unlocked colors; those new Colors get displayed to the user.
// It's only when a user clicks Save Palette that we do something with the current Palette instance to save it in our data model, and generate a new Palette instance with it's own instances of Color

class Palette {
  constructor(){
    
  }
}
