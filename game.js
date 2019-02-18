'use strict' 

class Game {    
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.player;     
    this.obstacles = [];
    this.enemies = [];
    this.platforms = [];    
    this.isGameOver = false;    
    this.shoots = [];
    this.shootCont = 0;
    this.movingPlatforms;
  };

  startLoop() {     
    this.player = new Player(this.canvas, 10);    
    const loop =() => {      
      if (Math.random() < 0.005) {        
        this.obstacles.push(new Obstacle(this.canvas));                         
      };                             

      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();
      this.checkCollisiion();           
      window.requestAnimationFrame(loop);
      if (this.shoots.isShoot) {
        this.shoots.push(new Shoot(this.canvas, this.player.x, this.player.y));
      }

    };
      
    window.requestAnimationFrame(loop);
  };


  clearCanvas(){
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)    
  }
  updateCanvas() {
    
    this.player.upDate();       
    this.obstacles.forEach((obstacle) => {
      obstacle.upDate();
    })
    this.enemies.forEach((enemy)=> {
      enemy.upDate();
    });    
    this.platforms.forEach((platform)=> {
      platform.upDate();
    });    
    this.shoots.forEach((shoot) => {
      shoot.upDate();
    })
           
  };

  drawCanvas() {
  
    this.player.draw();      
    this.obstacles.forEach((obstacle) =>{
      obstacle.draw();
    });
    this.enemies.forEach((enemy)=> {
      enemy.draw();
    });    
    this.platforms.forEach((platform) =>{
      platform.draw();
    });    
    this.shoots.forEach((shoot) => {
      shoot.draw();        
    });         

  }

  checkCollisiion() {
    this.obstacles.forEach((obstacle, index) =>{       //obstaculos
      if (this.player.checkCollisions(obstacle)) {
        this.player.loseLives();      
        this.obstacles.splice(index, 1); 
        if (this.player.lives === 0) {
          this.isGameOver = true;
          this.onGameOver();
        }
      } else if (obstacle.x < 0) {
          this.obstacles.splice(index, 1);          
      } 
    })
    this.enemies.forEach((obstacle, index) =>{          //enemigos
      if (this.player.checkCollisions(obstacle)) {        
        this.player.loseLives(); 
        if (this.player.lives === 0) {
          this.isGameOver = true;
          this.onGameOver();
        }       
        this.enemies.splice(index, 1); 
      } else if (obstacle.x < 0){
        this.enemies.splice(index, 1);              
      } 
    })

    let collidingPlatforms = false;                //plataformas
    this.platforms.forEach((platform, index) =>{
      if (this.player.checkPlatform(platform)) {       
        if (this.player.speed >= 0) {
          collidingPlatforms = true
          this.player.isCollide = true;
          this.player.jump = false;    
        } else if (platform.x < 0)
        this.platforms.splice(index, 1);                               
      } else if (!collidingPlatforms){
        this.player.isCollide = false;
      }      
    });
    
    this.shoots.forEach((shoot, index) => {         //disparos
       if (shoot.x > this.player.x + this.player.width + 150)     {
        this.player.isShoot = false;
        
       } 
       if (shoot.x > this.canvas.width) {
         this.shoots.splice(index,1);
       }                                                                                             
       if (this.enemies.length > 0) {
         this.enemies.forEach((enemy, index) =>{
           if (shoot.checkCollision(enemy)) {
             this.shoots.splice(index, 1);
             this.shootCont += 1;
             if (this.shootCont === 5) {
               this.enemies.splice(index, 1) 
               this.shootCont = 0;
             }
           }
         })
       }   
    })
  
  }

  gameOver(callBack) {
    this.onGameOver = callBack;
  };

};



