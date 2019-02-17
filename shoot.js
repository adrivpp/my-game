'use strict'

class Shoot { 
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.x = 100;
    this.y = 100;
    this.speed = 5;    
  }

  upDate() {
    this.x = this.x + this.speed;
    console.log('update')
  }

  draw() {
    this.ctx.fillStyle = 'red';
    console.log(this.x, this.y)
    
    this.ctx.fillRect(this.x, this.y, 30, 30);    
    console.log('draw')
    
  }

}