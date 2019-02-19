'use strict' 

class MovingPlats {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.x = canvas.width + 300;
    this.y = canvas.height - 400;
    this.xSpeed = 5;
    this.direction = -1;
    this.width = 70;
    this.height = 49;
    this.img = movingPlatformSprite;
  }

  upDate() {    
      
    if (this.x - this.width/2 <= 0) {
      this.direction = 1;
    } else if (this.x + this.width >= this.canvas.width) {
      this.direction = -1;
    }
    this.x = this.x + this.xSpeed*this.direction;    
  }

  draw() {    
    this.ctx.drawImage(this.img,0,0,this.width,this.height,this.x,this.y,this.width,this.height);
    
  }
}
