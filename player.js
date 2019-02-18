'use strict'

class Player {
  constructor(canvas, lives) {
    this.columns = 18;
    this.rows = 23;
    this.sheetWidth =  1200; //tamaños de la imagen donde estan los sprites
    this.sheetHeight = 2500; 
    this.width = this.sheetWidth/this.columns;
    this.height = this.sheetHeight/this.rows;
    this.canvas = canvas;
    this.jump = false;
    this.x = 50 + this.width/2;
    this.y = canvas.height - this.height;
    this.yv = 1;
    this.xv = 1;
    this.ctx = canvas.getContext('2d');
    this.lives = lives;
    this.speed = 0;
    this.isCollide = false;        
    this.character = characterSprite;
    this.srcX;
    this.srcY;
    this.currentFrame = 0.35;           
    this.cont = 0; 
    this.platformY;
  }

  upDate() {        
    //this.currentFrame = ++this.currentFrame % this.columns;   //aumenta los frames en los que nos movemos
    this.cont += 1;  
    this.srcX = this.currentFrame*this.width;
    this.srcY = 0;
    
    if (this.isCollide && !this.jump) {
      this.speed = 0;
      this.y = this.platformY - this.height + 4;
    }
        
    if(this.jump && this.y < this.canvas.height - this.height/2 || this.y < this.canvas.height - this.height && !this.isCollide ) {      
      this.speed += 0.5;      
    }              
    this.y = this.y + this.yv*this.speed;    
    
    if (this.y >= this.canvas.height - this.height) {
      this.speed = 0;
      this.jump = false;
      this.y = this.canvas.height - this.height;                     
    }     
  }   
  

  draw() {    
    this.upDate();
    this.ctx.drawImage(this.character,this.srcX,this.srcY,this.width,this.height,this.x,this.y,this.width,this.height);  
  };

  checkCollisions(obstacle) {
    
    const rightCollision = this.x + this.width/2 > obstacle.x - obstacle.width/2;
    const leftCollision = this.x - this.width/2 < obstacle.x + obstacle.width/2;
    const topCollision = this.y < obstacle.y + obstacle.height/2;
    const bottomCollision = this.y + this.height > obstacle.y - obstacle.height/2;
    
    if (rightCollision && leftCollision && topCollision && bottomCollision) {
      return true;   
      
    }    
    return false
  };

  checkPlatform(platform) {
    const rightCollision = this.x + this.width > platform.x;    
    const bottomCollision = this.y + this.height > platform.y;
    const leftCollision = this.x < platform.x + platform.width;
    const topCollision = this.y < platform.y;
    
    if (rightCollision && bottomCollision && leftCollision && topCollision) {
      this.platformY = platform.y;
      return true; 
    }    
    return false
  }; 

  loseLives() {
    this.lives--;
  }

  
  
};

//const rightCollision = this.x + this.width/2 > platform.x;    
    //const bottomCollision = this.y + this.height > platform.y - platform.height/2;
    //const leftCollision = this.x - this.width/2 < platform.x + platform.width;