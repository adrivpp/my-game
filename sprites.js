'use strict'
    
let srcX;
let srcY;

const sheetWidth =  1100; //tamaños de la imagen donde estan los sprites
const sheetHeight = 2650;

const columns = 10;  //candidad de columnas que hay en la imagen
const rows = 23; //cantidad de filas

let width = sheetWidth/columns; //width de cada uno de los elementos en el sprite
let height = sheetHeight/rows;

let currentFrame = 0;
const character = new Player();
character.src = "claw.png";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function updateFrame() {
  currentFrame = ++currentFrame % columns;   //aumenta los framens en los que nos movemos
  srcX = currentFrame*width;
  srcY = 0;
  ctx.clearRect(this.x, this.y, width,height);
};

function drawImage() {
  updateFrame();
  ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);
};

setInterval(function(){
  drawImage();
}, 100);


    
