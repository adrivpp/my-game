'use strict' 

class Gems{
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.x = canvas.width - 150;
    this.width = 50;
    this.height = 50;
    this.y = 5;
    this.speed = 3;
    this.img = gemSprite;
  }

  upDate() {
    this.y = this.y + this.speed;
    if (this.y > 100) {
      this.speed = 0;
    }
  }

  draw() {    
    this.ctx.drawImage(this.img,0,0,this.width,this.height,this.x,this.y,this.width,this.height);
  }
}