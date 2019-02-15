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
      this.speed += 2;
    }
  
    this.y = this.y + this.yv*this.speed;
    if (this.y > 700) {
      this.speed = 0;
      this.jump = false;
    }
  }

  draw() {
    this.ctx.fillstyle = 'black';
    this.ctx.fillRect(this.x, this.y,this.size,this.size);
  };
  
};

