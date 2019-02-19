'use strict' 

class Gems{
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.x = canvas.width - 150;
    this.width = 30;
    this.height = 30;
    this.y = 30;
    this.ySpeed = 3;
  }

  upDate() {
    this.y = this.y + this.ySpeed;
    if (this.y > 150) {
      this.ySpeed = 0;
    }
  }

  draw() {
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.x,this.y,this.width,this.height);
  }
}