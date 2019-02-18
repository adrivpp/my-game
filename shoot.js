'use strict'

class Shoot { 
  constructor(canvas, x, y) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.speed = 1;        
    this.xS = 8;
    this.width = 10;
    this.height = 10;
  }

  upDate() {         
  this.x = this.x + this.xS*this.speed;      
  }

  draw() {
    this.ctx.fillStyle = 'red';           
    this.ctx.fillRect(this.x, this.y, this.width, this.height);           
  }

  checkCollision(enemy) {
    const rightCollision = this.x + this.width/2 > enemy.x - enemy.width/2;
    const leftCollision = this.x - this.width/2 < enemy.x + enemy.width/2;
    const topCollision = this.y < enemy.y + enemy.height/2;
    const bottomCollision = this.y + this.height > enemy.y - enemy.height/2;
    
    if (rightCollision && leftCollision && topCollision && bottomCollision) {
      console.log('collision') 
      return true;   
      
    }    
    return false
  };


}