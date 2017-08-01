import React from 'react';
// projects
import jscalc from './images/calc.png';
import pokesimon from './images/pokesimon.png';
import pomodoro from './images/pomodoro.png';
import tictactoe from './images/tictactoe.png';
// tech logos
import howler from './images/techlogos/howler.svg'
import react from './images/techlogos/react.svg'
import redux from './images/techlogos/redux.svg'
import sass from './images/techlogos/sass.svg'
import jquery from './images/techlogos/jquery.png'
import router from './images/techlogos/react-router.svg'
import typed from './images/techlogos/typed.png'

export default [
  {
    projectImage: pokesimon,
    link: "https://freddydumont.github.io/simon-game/",
    name: "Poké(Si)mon",
    description: ['A port of the classic electronic game ', <a href="https://en.wikipedia.org/wiki/Simon_(game)" title="Wikipedia page of Simon game" target="_blank" rel="noopener noreferrer">Simon</a>, ' with a Pokémon theme showcasing usage of Redux asynchronous actions.'],
    technology: "Poké(Si)mon is a React application making use of Redux thunks to generate the game loop. Flexbox is used for the main layout and CSS Grid for the Pokémon buttons. The sound is managed by the powerful Howler library. Most icons were manipulated in Adobe Illustrator to achieve the desired result.",
    techLogos: [
      <img src={howler} alt="Howler" className="logo" width="100" />,
      <img src={react} alt="React" className="logo" width="100" />,
      <img src={redux} alt="Redux" className="logo" width="100" />,
    ]
  },
  {
    projectImage: tictactoe,
    link: "https://freddydumont.github.io/tic-tac-toe/",
    name: "Minimax's Tic Tac Toe",
    description: "A Single Page Application demonstrating routing in a React & Redux environment. What started as a simple tic tac toe game ended up being a fairly big project using plenty of different tools.",
    technology: "Minimax's is a React Redux application using React Router to manage the multiple routes. Animations are executed with jQuery and Typed.js is used for the text. The tic tac toe algorithm comes from an API and requests are handled with Axios and Redux Promise.",
    techLogos: [
      <img src={typed} alt="Typed.js" className="logo" width="100" />,
      <img src={react} alt="React" className="logo" width="100" />,
      <img src={redux} alt="Redux" className="logo" width="100" />,
      // <img src={router} alt="React Router" className="logo" width="100" />,
      <img src={jquery} alt="jQuery" className="logo" width="100" />,
    ]
  },
]