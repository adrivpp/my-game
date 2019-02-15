'use strict' 

class Game {    
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.player; 
    this.controls;
  };

  startLoop() {
    this.player = new Player(this.canvas, 5);
    this.controls = new Controller();
    //console.log('out of loop')
    const loop =() => {
      //console.log('on loop');     

      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();

      window.requestAnimationFrame(loop);

      };
    window.requestAnimationFrame(loop);
    };


  clearCanvas(){
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)    
  }
  updateCanvas() {
    this.player.upDate();
  }

  drawCanvas() {
    this.player.draw();
  }

};



