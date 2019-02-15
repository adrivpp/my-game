'use strict'

class Player {
  constructor(canvas, lives) {
    this.size = 50;
    this.jump = false;
    this.x = 144;
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
    console.log(this.y)
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
    if (this.x + this.size/2 > obstacle.x - obstacle.size/2);
    console.log('hola') 
  }

  
};

