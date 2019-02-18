'use strict' 

class Gems{
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.x = canvas.width - 300;
    this.width = 30;
    this.height = 30;
  }

}