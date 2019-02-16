'use strict' 

class Enemy {
  constructor(canvas) {
    this.canvas = canvas;
    this.size = 50;
    this.ctx = canvas.getContext('2d');
    this.y = canvas.height - this.size;
    this.x = this.canvas.width;    
    this.speed = -5;        
  }

  upDate() {
    this.x = this.x + this.speed;    
  }

  draw() {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.x,this.y,this.size,this.size);
  }
}