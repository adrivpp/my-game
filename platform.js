'use strict' 

class Platform {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');    
    this.width = 51; 
    this.height = 59.44;
    this.currentFrame = 0;
    this.x = canvas.width;    
    this.y = canvas.height - 140;
    this.xSpeed = -3;    
    this.img = platformSprite;      
  }

  upDate(){
    this.x = this.x + this.xSpeed;   
  }

  draw() {
    
    this.ctx.drawImage(this.img,0,280,this.width,this.height,this.x,this.y,this.width,this.height);
  };
}

