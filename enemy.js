'use strict' 

class Enemy {
  constructor(canvas) {
    this.sheetWidth =  690;
    this.sheetHeight = 908;
    this.width = this.sheetWidth/6;
    this.height = this.sheetHeight/8;
    this.currentFrame = 0;
    this.srcX;
    this.srcY;
    this.canvas = canvas;    
    this.ctx = canvas.getContext('2d');
    this.y = canvas.height - this.height;
    this.x = this.canvas.width;    
    this.speed = -3;        
    this.img = new Image();
    this.img.src = "images/laRoux.png"
  }

  upDate() {
    //this.currentFrame = ++this.currentFrame % 3;
    this.srcX = this.currentFrame*this.width;
    this.srcY = 130;
    this.x = this.x + this.speed;    
  }

  draw() {
    this.upDate();
    this.ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.x,this.y,this.width,this.height);
  }
}