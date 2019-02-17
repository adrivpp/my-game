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
    this.character = new Image();
    this.character.src = "images/clawchar.png"
    this.srcX;
    this.srcY;
    this.currentFrame = 0.35;                 
    this.isShoot = false;        
  }

  upDate() {        
    //this.currentFrame = ++this.currentFrame % this.columns;   //aumenta los frames en los que nos movemos
      
    this.srcX = this.currentFrame*this.width;
    this.srcY = 0;    
        
    if(this.jump && this.y < this.canvas.height - this.height/2 || this.y < this.canvas.height - this.height && !this.isCollide ) {      
      this.speed += 1;      
    }              
    this.y = this.y + this.yv*this.speed;    
    
    if (this.y >= this.canvas.height - this.height || this.isCollide && !this.jump) {
      this.speed = 0;
      this.jump = false;                     
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
      console.log('collision') 
      return true;   
      
    }    
    return false
  };

  checkPlatform(platform) {
    const rightCollision = this.x + this.width/2 > platform.x;    
    const bottomCollision = this.y + this.height > platform.y - platform.height;
    const leftCollision = this.x - this.width/2 < platform.x + platform.width;
    
    if (rightCollision && bottomCollision && leftCollision) {
      return true;    
    }    
    return false
  }; 

  loseLives() {
    this.lives--;
  }

  
  
};

