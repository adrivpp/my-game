'use strict'

class Shoot { 
  constructor(canvas, x, y) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.x = x;
    this.y = y;       
    this.xS = 10;
    this.width = 10;
    this.height = 8;
    
  }

  upDate() {         
  this.x = this.x + this.xS;      
  }

  draw() {
    this.ctx.fillStyle = 'orange';           
    this.ctx.fillRect(this.x, this.y, this.width, this.height);           
  }

  checkCollision(enemy) {
    const rightCollision = this.x + this.width/2 > enemy.x + enemy.width/2;
    const leftCollision = this.x - this.width/2 < enemy.x + enemy.width;
    const topCollision = this.y < enemy.y + enemy.height;
    const bottomCollision = this.y + this.height > enemy.y - enemy.height;
    
    if (rightCollision && leftCollision && topCollision && bottomCollision) {   
      
      return true;         
    }    
    return false
  };


}