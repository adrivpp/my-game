'use strict'

class Player {
  constructor(canvas, lives) {
    this.size = 50;
    this.canvas = canvas;
    this.jump = false;
    this.x = 50 + this.size/2;
    this.y = canvas.height - this.size/2;
    this.yv = 1;
    this.xv = 1;
    this.ctx = canvas.getContext('2d');
    this.lives = lives;
    this.speed = 0;
    this.isCollide = false;    
  }

  upDate() {
        
    if(this.jump && this.y < this.canvas.height - this.size/2) {      
      this.speed += 1;      
    }              
    this.y = this.y + this.yv*this.speed;    
    
    if (this.y >= this.canvas.height - this.size/2 && this.jump || this.isCollide) {
      this.speed = 0;
      this.jump = false;                   
    }

  }   
  

  draw() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(this.x, this.y - this.size/2,this.size,this.size);
    //if (this.shoots) {
      //this.ctx.beginPath()
      //this.ctx.arc(this.shootX, this.y + this.size/2, 2, 0, Math.PI*2,true);
      //this.ctx.fill();
      //this.ctx.stroke();
    //}
  };

  checkCollisions(obstacle) {
    
    const rightCollision = this.x + this.size/2 > obstacle.x - obstacle.size/2;
    const leftCollision = this.x - this.size/2 < obstacle.x + obstacle.size/2;
    const topCollision = this.y - this.size/2 < obstacle.y + obstacle.size/2;
    const bottomCollision = this.y + this.size/2 > obstacle.y - obstacle.size/2;
    
    if (rightCollision && leftCollision && topCollision && bottomCollision) {
      return true;    
    }    
    return false
  };

  loseLives() {
    this.lives--;
  }
  
};

