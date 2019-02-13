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

    setTimeout(buildGameOver,1000)
        
  };
  
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



};



window.addEventListener('load', main);
