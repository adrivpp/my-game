'use strct'

class Player {
  constructor(canvas, lives) {
    this.x = 20;
    this.y = 700;
    this.lives = lives;
    this.ctx = canvas.getContext('2d');
    this.direction = 0;
    this.speed = 3;
    this.size = 150;
  }  

  update() { 
    this.y = this.y + this.direction*this.speed;
  }

  draw() {
    this.ctx.fillstyle = 'black';
    this.ctx.fillRect(this.x, this.y,this.size,this.size);
  };

  setDirection(direction){
    this.direction = direction;    
  };
  

};

