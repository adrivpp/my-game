'use strict'

class Player {
  constructor(canvas, lives) {
    this.size = 50;
    this.jump = false;
    this.x = 100 + this.size/2;
    this.y = 700;
    this.yv = 1;
    this.ctx = canvas.getContext('2d');
    this.lives = lives;
    this.speed = 0;
  }

  upDate() {
    if( this.jump && this.y < 700) {
      this.speed += 1;
    }
 
  
    this.y = this.y + this.yv*this.speed;
    
    if (this.y >= 681 && this.jump) {
      this.speed = 0;
      this.jump = false;
    }
  }

  draw() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(this.x, this.y,this.size,this.size);
  };

  checkCollisions(obstacle) {
    
    const rightCollision = this.x + this.size/2 > obstacle.x - obstacle.size/2;
    const leftCollision = this.x - this.size / 2 < obstacle.x + obstacle.size/ 2;
    const topCollision = this.y - this.size / 2 < obstacle.y + obstacle.size / 2;
    const bottomCollision = this.y + this.size / 2 > obstacle.y - obstacle.size / 2;
    
    if (rightCollision && leftCollision && topCollision && bottomCollision) {
      return true;    
    }    
    return false
  }

  
};

