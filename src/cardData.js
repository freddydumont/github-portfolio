import React from 'react';
import jscalc from './images/calc.png';
import pokesimon from './images/pokesimon.png';
import pomodoro from './images/pomodoro.png';
import tictactoe from './images/tictactoe.png';

export default [
  {
    projectImage: pokesimon,
    link: "https://freddydumont.github.io/simon-game/",
    name: "Poké(Si)mon",
    description: ['A port of the classic electronic game ', <a href="https://en.wikipedia.org/wiki/Simon_(game)" title="Wikipedia page of Simon game" target="_blank" rel="noopener noreferrer">Simon</a>, ' with a Pokémon theme showcasing usage of Redux asynchronous actions.'],
    technology: "Poké(Si)mon is a React application making use of Redux thunks to generate the game loop. Flexbox is used for the main layout and CSS Grid for the Pokémon buttons. The sound is managed by the powerful Howler library. Most icons were manipulated in Adobe Illustrator to achieve the desired result."
  }
]