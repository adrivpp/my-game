CAPTAIN CLAW

Descripción

Es un juego en el que debes esquivar obstaculos e ir recolectando gemas para obtener el amuleto de las nueve vidas

MVP - Tecnología (DOM - CANVAS)
* Movimiento de arriba a abajo del jugador
* Añadir obstáculos 
* Restar vidas al jugador cada vez que colisione con un obstáculo
main.js
game.js
player.js
obstacles.js

Backlog
* Añadir niveles
* Añadir bosses despues de cada 3 niveles
* Añanadir enemigos
* Añadir la funcion de atacar para el player

States y States Transitions
El jugador estará estático en la parte izquierda de la pantalla y el fondo se irá moviendo de derecha a izquierda.

splashScreen
gameScreen
gameoverScreen
winScreen
funciones de transicion.

Task
añadir al jugador: class Player
upDate()
Draw()

Darle movimientos:
setDirection()

Añadir los obstaculos: class Obstacles
upDate()
Draw()

Game Screen:
startLoop()
updateCanvas()
clearCanvas()
drawCanvas()
checkCollisions()

Añadir las gemas del amuleto: class Gems
update()
draw()

Chequear la cantidad de gemas que se han obtenido.

Links

Link url

Git
Especificar las url del proyecto y del deploy

Link Repositorio
https://github.com/adrivpp/my-game


Link Deploy

Slides.com
Especificar la url de la presentacion

Link Slides.com

Instrucciones del juego
Al finalizar el juego generar las instrucciones
