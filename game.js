'use strict'

class Game {    
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.player;
    this.enemies = [];
    this.isGameOver = false;
  };

  startLoop() {
    this.player = new Player(this.canvas, 5);    
    //console.log('out of loop')
    const loop =() => {
      //console.log('on loop');
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();
      this.player.checkCollisionJump();
      
      window.requestAnimationFrame(loop);
      
      };
    window.requestAnimationFrame(loop);
    };
    

  clearCanvas(){
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)    
  }
  updateCanvas() {
    this.player.update();
  }

  drawCanvas() {
    this.player.draw();
  }

 
  
};



