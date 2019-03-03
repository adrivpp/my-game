'use strict'

const main = () => {                                  //construir el HTML del main
  const buildDom = (html) => {
    const main = document.querySelector('main');
    main.innerHTML = html;
    return main;
  };

  const buildSplash = ()=> {                    //start
    buildDom(`
      <section class="splash">        
        <section class="instructions">
          <h1>Instucciones</h1>
          <p>Usa las flechas para moverte y saltar</p>
          <p>Usa el espacio para disparar</p>
          <p>Logra derrotar a tres enemigos y obtendrás una de las gemas,
          si consigues cinco, habrás ganado el amuleto</p>
        </section>
        <button class="start">Start</button>
        <audio controls autoplay loop>
          <source src= "audio/splash.mp3" type="audio/mpeg">
        </audio>
      </section>
      
    `);
    const button = document.querySelector('button');
    button.addEventListener('click', buildGame);    
    
  }
  
  const buildGame = () => {                   //construye la pantalla de juego
    buildDom(`  
      <section class="game-screen">  
      <div class="info">
        <p class="vidas"></p>
        <p class="gemas"></p>   
      </div>
        <canvas class="canvas">       
        </canvas>   
        <audio controls autoplay loop>
          <source src= "audio/game.mp3" type="audio/mpeg">
        </audio>              
      </section>
    `);
    
    const width = document.querySelector('.game-screen').offsetWidth;
    const height = document.querySelector('.game-screen').offsetHeight;

    const canvas = document.querySelector('canvas');   

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    
    const game = new Game(canvas);   
    game.gameOver(buildGameOver); 
    game.winGame(buildWin);
    
    
    game.startLoop();     
    const setMoves = (event) => {     

      if (event.type === "keydown") {
        if (event.keyCode === 38){          
          game.player.jump = true;
        } else if (event.keyCode === 0 || event.keyCode === 32) {                      
          game.player.isShoot = true;   
          game.shoots.push(new Shoot(canvas, game.player.x + game.player.width - 10, game.player.y + game.player.height/2 - 25))        
        } else if  (event.keyCode === 39) {
          game.player.right = true;
        } else if (event.keyCode === 37 && event.type === "keydown") {
          game.player.left = true;
        }
    } else if (event.type === "keyup") {
        game.player.right = false;       
        game.player.isShoot = false;  
        game.player.left = false; 
        game.player.jump = false;
    }     

    };   
    

    let enemiesIntervalId = setInterval(()=> {
      game.enemies.push(new Enemy(canvas));      
    },7000);  
    let platformId = setInterval(() => {
      game.platforms.push(new Platform(canvas))
    }, 5000);        

        
    document.addEventListener('keydown', setMoves);  
    document.addEventListener('keyup', setMoves)
    
   };                  

  buildSplash();
    

  const buildGameOver = () => {             //construye la pantalla del game over
    buildDom(`
      <section class="game-over">        
      <h1>Game Over</h1>
      <button class="restart">Restart</button>  
      <audio controls autoplay>
          <source src= "audio/gameover.mp3">
        </audio>      
      </section>
    `);
    const restart = document.querySelector('button');
    restart.addEventListener('click', buildGame);    
  };

  const buildWin = ()=> {                 //pantalla de ganar
    const buildWinScreen = buildDom(`
    <section class="you-win">        
        <img src="images/win (1).png">
        <button class="restart">Restart</button>
        <audio controls autoplay>
          <source src= "audio/Captain Claw - The Ceremony (mp3cut.net).mp3">
        </audio>
      </section>    
    `);
    const button = document.querySelector('button');
    button.addEventListener('click', buildGame);
  };

  
};

window.addEventListener('load', main);

