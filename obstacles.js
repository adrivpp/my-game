class Obstacle {
  constructor(canvas) {
    this.sheetWidth = 600; //tamaños de la imagen donde estan los sprites
    this.sheetHeight = 200;
    this.columns = 6;  //candidad de columnas que hay en la imagen
    this.rows = 6; //cantidad de filas
    this.width = this.sheetWidth/this.columns; //width de cada uno de los elementos en el sprite
    this.height = this.sheetHeight/this.rows;
    this.currentFrame = 0.5;
    this.img = obstacleSprite;       
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')
    this.y = canvas.height - this.height;
    this.x = canvas.width;
    this.speed = -10;     
          
  }

  upDate() {
    this.x = this.x + this.speed;            
  }

  draw() {
  this.ctx.drawImage(this.img,this.currentFrame*this.width,220,this.width,this.height,this.x,this.y,this.width,this.height)
  //this.ctx.fillRect(this.x, this.y - this.height/2, this.width, this.height)
  }

}