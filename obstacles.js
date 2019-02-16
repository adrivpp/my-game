class Obstacle {
  constructor(canvas) {
    this.size = 20;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')
    this.y = canvas.height - this.size/2;
    this.x = canvas.width;
    this.speed = -8;               
  }

  upDate() {
    this.x = this.x + this.speed;            
  }

  draw() {
  this.ctx.fillStyle = 'red';
  this.ctx.fillRect(this.x, this.y - this.size/2, this.size, this.size)
  }

}