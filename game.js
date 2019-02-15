'use strict' 

class Game {    
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.player; 
    this.controls;
    this.obstacles = [];
  };

  startLoop() {
   
    this.player = new Player(this.canvas, 5);
    this.controls = new Controller();
    //console.log('out of loop')
    const loop =() => {      
      if (Math.random() < 0.01) {        
        this.obstacles.push(new Obstacle(this.canvas, this.x));   
             
      };
       
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
    this.obstacles.forEach((obstacle) => {
      obstacle.upDate();
    })
    
  };

  drawCanvas() {
    this.player.draw();
    this.obstacles.forEach((obstacle) =>{
      obstacle.draw();
    });
  }

};



