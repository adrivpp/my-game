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
    this.gems = [];
    this.kills = 0;    
    this.movingPlatforms = [];
    this.isWin = false;
    this.hitSound = new Audio();
    this.hitSound.src = './audio/hit.mp3';
    this.playerSpeaks = new Audio();
    this.playerSpeaks.src = './audio/takethat.mp3';
    this.gemSound = new Audio();
    this.gemSound.src = './audio/gemas.mp3';
  };

  startLoop() {         
    
    this.movingPlatforms.push(new MovingPlats(this.canvas));
    this.player = new Player(this.canvas, 7);        
    const loop =() => {      
      let lives = document.querySelector('.vidas');
      lives.innerHTML = `Vidas: ${this.player.lives}`;
      let gems = document.querySelector(".gemas");
        gems.innerHTML = `Gemas: ${this.player.gems}`;    
      

      if (Math.random() < 0.01) {        
        this.obstacles.push(new Obstacle(this.canvas));                         
      };                             
      if (this.kills === 3 && this.gems.length === 0) {          
        this.gems.push(new Gems(this.canvas));         
        this.kills = 0;
      }                   
      
      
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();
      this.checkCollisiion();  
      this.checkplayerLives();         
      window.requestAnimationFrame(loop);
    

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
    this.gems.forEach((gem) => {
      gem.upDate();
    })   
    this.movingPlatforms.forEach((platform)=>{
      platform.upDate();
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
    this.gems.forEach((gem) => {
      gem.draw();
    })      
    this.movingPlatforms.forEach((platform)=>{
      platform.draw();
    }) 

  }

  checkplayerLives() {
    if (this.player.lives === 0) {
      this.isGameOver = true;
      this.onGameOver();
    }
  }

  checkCollisiion() {
    this.obstacles.forEach((obstacle, index) =>{       //obstaculos
      if (this.player.checkCollisions(obstacle)) {
        this.hitSound.play();
        this.player.loseLives();      
        this.obstacles.splice(index, 1);         
      } else if (obstacle.x < 0) {
          this.obstacles.splice(index, 1);          
      } 
    });

    this.enemies.forEach((obstacle, index) =>{          //enemigos
      if (this.player.checkCollisions(obstacle)) { 
        this.hitSound.play();       
        this.player.loseLives();         
        this.enemies.splice(index, 1); 
      } else if (obstacle.x < 0){
        this.enemies.splice(index, 1);              
      } 
    })

    let collidingPlatforms = false;                //plataformas
    this.platforms.forEach((platform, index ) => {      
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

    this.movingPlatforms.forEach((platform) => {
      if (this.player.checkPlatform(platform)) {
        if (this.player.speed >= 0) {
          collidingPlatforms = true
          this.player.isCollide = true;
          this.player.jump = false;    
          this.player.x = platform.x - platform.width/2;
        } else if (platform.x < 0)
        this.platforms.splice(index, 1);                               
      } else if (!collidingPlatforms){
        this.player.isCollide = false;
      }
    })
    
    this.shoots.forEach((shoot, index) => {         //disparos       
       if (shoot.x > this.canvas.width) {
         this.shoots.splice(index,1);
       }                                                                                             
       if (this.enemies.length > 0) {
         this.enemies.forEach((enemy, index) =>{
           if (shoot.checkCollision(enemy)) {
             
             this.shoots.splice(index, 1);
             this.shootCont += 1;
             if (this.shootCont === 5) {
               this.playerSpeaks.play();
               this.kills++;                         
               this.enemies.splice(index, 1) 
               this.shootCont = 0;
             }
           }
         })
       }   
    })

    this.gems.forEach((gem, index) =>  {       //gemas                
      if (this.player.checkPlatform(gem)) {            
        this.gemSound.play();
        this.player.gems++;
        this.gems.splice(index,1);    
        this.player.lives++;
        console.log(this.player.lives)    
      }
      if (this.player.gems === 5) {
        this.isWin =  true;
        this.winGame();
      }
    })
    
  }

  gameOver(callBack) {
    this.onGameOver = callBack;
  };

  winGame(callBack) {
    this.winGame = callBack;
  }

};



