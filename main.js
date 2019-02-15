'use strict'

const main = () => {                                  //construir el HTML del main
  const buildDom = (html) => {
    const main = document.querySelector('main');
    main.innerHTML = html;
    return main;
  };

  const buildSplash = ()=> {
    const splashScreen = buildDom(`
      <section class="splash">
        <h1>Captain Claw</h1>
        <button class="start">Start</button>
      </section>
    `);
    const button = document.querySelector('button');
    button.addEventListener('click', buildGame);
    const section = document.querySelector('section');
    const width = document.querySelector('.splash').offsetWidth;
    const height = document.querySelector('.splash').offsetHeight;
    section.style.backgroundImage = "url('images/claw.png')";
    section.style.backgroundSize = 'contain';
    section.style.backgroundRepeat = 'no-repeat';
    section.style.position = 'absolute';    
  }
  
  const buildGame = () => {                   //construye la pantalla de juego
    const buildGameScreen = buildDom(`  
      <section class="game-screen">    
        <canvas></canvas>                              
      </section>
    `);
    
    const width = document.querySelector('.game-screen').offsetWidth;
    const height = document.querySelector('.game-screen').offsetHeight;

    const canvas = document.querySelector('canvas');

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    const game = new Game(canvas);        
    game.startLoop(); 
    const setMoves = (event) => {     

      if  (event.code === 'ArrowUp' && game.player.jump === false ) {
        game.player.speed = -20;
        game.player.jump = true;
      }
    };            
        
    document.addEventListener('keydown', setMoves)
   };           //setTimeout(buildWin,1000) //pueba, borrar depues        
  
  
  buildSplash();  

  const buildGameOver = () => {             //construye la pantalla del game over
    const buildGameOverScreen = buildDom(`
      <section class="game-over">
        <h1>You lose</h1>
        <button class="restart">Restart</button>
      </section>
    `);
    const button = document.querySelector('button');
    button.addEventListener('click', buildGame);
  };

  const buildWin = ()=> {
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
