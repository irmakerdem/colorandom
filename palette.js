class Palette {
  constructor(color1, color2, color3, color4, color5) {
    this.colors = [color1, color2, color3, color4, color5];
    this.id = Date.now();
  }
  lock(id) {
    this.colors[id].locked = true;
  }
  unlock(id) {
    this.colors[id].locked = false;
  }
};
