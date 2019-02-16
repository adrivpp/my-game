'use strict' 

class Platform {
  constructor(canvas, y){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.x = canvas.width;
    this.size = 50;
    this.y = canvas.height - 120;
    this.xSpeed = -3;
    this.ySpeed = -3;
  }

  upDate(){
    this.x = this.x + this.xSpeed;      
  }

  draw() {
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.x, this.y, this.size, this.size)
  };



}