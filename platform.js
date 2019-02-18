'use strict' 

class Platform {
  constructor(canvas, y){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.sheetWidth =  612; //tamaños de la imagen donde estan los sprites
    this.sheetHeight = 535;
    this.columns = 12;  //candidad de columnas que hay en la imagen
    this.rows = 9; //cantidad de filas
    this.width = this.sheetWidth/this.columns; //width de cada uno de los elementos en el sprite
    this.height = this.sheetHeight/this.rows;
    this.currentFrame = 0;
    this.x = canvas.width;    
    this.y = canvas.height - 140;
    this.xSpeed = -3;
    this.ySpeed = -3;
    this.img = new Image();
    this.img.src = "images/platform.png";
    this.srcX = this.currentFrame*this.width;
    this.srcY = 280;
  }

  upDate(){
    this.x = this.x + this.xSpeed;      
  }

  draw() {
    
    this.ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.x,this.y,this.width,this.height);
  };



}