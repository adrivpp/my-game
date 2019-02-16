'use strict' 

class Game {    
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.player; 
    this.controls;
    this.obstacles = [];
    this.enemies = [];
    this.platforms = [];    
    this.isGameOver = false;
  };

  startLoop() { 

    this.player = new Player(this.canvas, 5);
    this.controls = new Controller();
    
   
    //console.log('out of loop')
    const loop =() => {      
      if (Math.random() < 0.012) {        
        this.obstacles.push(new Obstacle(this.canvas));                  
      };              
       
      //console.log('on loop');     

      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();
      this.checkCollisiion();           
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

  }

  checkCollisiion() {
    this.obstacles.forEach((obstacle, index) =>{
      if (this.player.checkCollisions(obstacle)) {
        this.player.loseLives();      
        this.obstacles.splice(index, 1); 
        if (this.player.lives === 0) {
          this.isGameOver = true;
          this.onGameOver();
        }
      } 
    })
    this.enemies.forEach((obstacle, index) =>{
      if (this.player.checkCollisions(obstacle)) {
        console.log('true')
        this.player.loseLives(); 
        if (this.player.lives === 0) {
          this.isGameOver = true;
          this.onGameOver();
        }       
        this.enemies.splice(index, 1); 
      } 
    })
    this.platforms.forEach((obstacle) =>{
      if (this.player.checkCollisions(obstacle)) {       
        console.log('hola')
        this.player.isCollide = true;                           
      } else {
        this.player.isCollide = false;
      }
    });
  }

  gameOver(callBack) {
    this.onGameOver = callBack;
  };

};



