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
        <button class="start">Start</button>
      </section>
    `);
    const button = document.querySelector('button');
    button.addEventListener('click', buildGame);
    const section = document.querySelector('section');
    const width = document.querySelector('.splash').offsetWidth;
    const height = document.querySelector('.splash').offsetHeight;
    
  }
  
  const buildGame = () => {                   //construye la pantalla de juego
    buildDom(`  
      <section class="game-screen">    
        <canvas class="canvas"></canvas>                              
      </section>
    `);
    
    const width = document.querySelector('.game-screen').offsetWidth;
    const height = document.querySelector('.game-screen').offsetHeight;

    const canvas = document.querySelector('canvas');

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    
    const game = new Game(canvas);   
    game.gameOver(buildGameOver);   
    
    game.startLoop(); 
    
    const setMoves = (event) => {     

      if  (event.keyCode === 38 && !(game.player.jump)) { //salto
        game.player.speed = -20;
        game.player.jump = true;                
        
      } //else if ((event.keyCode === 0 || event.keyCode === 32)) {        
         //game.player.shoots = true;
         //game.controls.space = true;     
      //}
    };   

    let enemiesIntervalId = setInterval(()=> {
      game.enemies.push(new Enemy(canvas));      
    },10000);  
    let platformId = setInterval(() => {
      game.platforms.push(new Platform(canvas))
    }, 5000);        
        
    document.addEventListener('keydown', setMoves)
   };                  

  buildSplash();  

  const buildGameOver = () => {             //construye la pantalla del game over
    buildDom(`
      <section class="game-over">
        <h1>Do u hate me?</h1>
        <button class="restart">Restart</button>
        <button class="Home">Home</button>
      </section>
    `);
    const restart = document.querySelector('button');
    restart.addEventListener('click', buildGame);
    //const home = document.querySelector('.home')
    //home.addEventListener('click', buildSplash)
  };

  const buildWin = ()=> {                 //pantalla de ganar
    const buildWinScreen = buildDom(`
    <section class="you-win">
        <h1>Has conseguido el amuleto de las nueve vidas</h1>
        <button class="restart">Restart</button>
      </section>    
    `);
    const button = document.querySelector('button');
    button.addEventListener('click', buildGame);
  };

  
};

window.addEventListener('load', main);

