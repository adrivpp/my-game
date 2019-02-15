class Obstacle {
  constructor(canvas, x) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')
    this.y = 730;
    this.x = this.canvas.width;
    this.speed = -5;
    this.size = 20;           
  }

  upDate() {
    this.x = this.x + this.speed;            
  }

  draw() {
  this.ctx.fillStyle = 'red';
  this.ctx.fillRect(this.x, this.y, this.size, this.size)
  }

}