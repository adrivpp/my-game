'use strict'

class Player {
  constructor(canvas, lives) {    
    this.width = 110;
    this.height = 110;
    this.canvas = canvas;
    this.jump = false;
    this.x = 50 + this.width/2;
    this.y = canvas.height - this.height;    
    this.ctx = canvas.getContext('2d');
    this.lives = lives;
    this.speed = 0;
    this.isCollide = false;        
    this.character = runSprite;
    this.srcX = 0;
    this.srcY;
    this.currentFrame = 0;           
    this.cont = 0; 
    this.platformY;
    this.isShoot = false;
    this.xS = 0;
    this.friction = -0.5;
    this.right = false;     
    this.gems = 0;
    this.left = false;
    this.sound = new Audio();
    this.sound.src = './audio/gun.mp3';
  }

  checkSprites() {
    if (this.jump) {
      this.character = jumpSprite;
      this.srcX = 0;
    } else if (this.isShoot) {
        this.sound.currentTime = 0;
        this.sound.play();
        //this.sound.volume = 0.5;
        this.character = shootSprite;  
        this.srcX = 110;             
    } else if (this.left) {
        this.character = leftSprite;
    } else if (this.right) {
        this.character = runSprite;   
    } else {
        this.character = quietSprite;
        this.srcX = 0;
    };
    
    
    this.srcY = 0;
  }

  checkMovement() {
    if (this.isCollide && !this.jump) {
      this.speed = 0;
      this.y = this.platformY - this.height + 5;
    }
        
    if(this.jump && this.y < this.canvas.height - this.height/2 || this.y < this.canvas.height - this.height && !this.isCollide ) {      
      this.speed += 0.5;      
    }              
    this.y = this.y + this.speed;    
    
    if (this.y >= this.canvas.height - this.height) {
      this.speed = 0;
      this.jump = false;
      this.y = this.canvas.height - this.height;                     
    } 
    
    if (this.right || this.left) {
      this.x = this.x + this.xS + this.friction;
      if (this.x > this.canvas.width) {
        this.x = 0;
      } else if (this.x < 0) {
        this.x = this.canvas.width;
      }
    }
  }

  upDate() {       
    this.cont++;  
    this.checkSprites(); 
    this.checkMovement();         
  }     

  draw() {        
    this.upDate();    
    if (this.cont > 6  && (this.right || this.left)) {
      this.currentFrame += this.width;      
      this.srcX = this.currentFrame;
      this.cont = 0;
    } else if (this.currentFrame >= 990) {      
      this.currentFrame = 0;
    } 
        

    this.ctx.drawImage(this.character,this.srcX,this.srcY,this.width,this.height,this.x,this.y,this.width,this.height);      
  };

  checkCollisions(obstacle) {
    
    const rightCollision = this.x > obstacle.x - obstacle.width/2;
    const leftCollision = this.x < obstacle.x + obstacle.width/2;
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
    const leftCollision = this.x + this.width/2 < platform.x + platform.width;
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
