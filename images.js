'use strict' 

class Image {
  constructor(canvas, img) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.x = 0;
    this.speed = -1;
    this.img = img
    
  }

  upDate(){
    this.x += this.speed;
    this.x %= this.canvas.width;
  };

  darw() {
    this.ctx.drawImage(this.img, this.x, 0);
    if (this.speed < 0) {
      this.ctx.drawImage(this.img, this.x + canvas.width, 0);
    } else {
      this.ctx.drawImage(this.img, this.x - img.width, 0);
    }
  };

}