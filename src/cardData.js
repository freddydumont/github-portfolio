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
import bootstrap from './images/techlogos/bootstrap.png'

export default [
  {
    projectImage: pokesimon,
    link: "https://freddydumont.github.io/simon-game/",
    name: "Poké(Si)mon",
    description: ['A port of the classic electronic game ', <a key={'simon wiki'} href="https://en.wikipedia.org/wiki/Simon_(game)" title="Wikipedia page of Simon game" target="_blank" rel="noopener noreferrer">Simon</a>, ' with a Pokémon theme showcasing usage of Redux asynchronous actions.'],
    technology: "Poké(Si)mon is a React application making use of Redux thunks to generate the game loop. Flexbox is used for the main layout and CSS Grid for the Pokémon buttons. The sound is managed by the powerful Howler library. Most icons were manipulated in Adobe Illustrator to achieve the desired result.",
    techLogos: [
      <img src={howler} alt="Howler" key="Howler" className="logo" />,
      <img src={react} alt="React" key="React" className="logo" />,
      <img src={redux} alt="Redux" key="Redux" className="logo" />,
    ]
  },
  {
    projectImage: tictactoe,
    link: "https://freddydumont.github.io/tic-tac-toe/",
    name: "Minimax's Tic Tac Toe",
    description: "A Single Page Application demonstrating routing in a React & Redux environment. What started as a simple tic tac toe game ended up being a fairly big project using plenty of different tools.",
    technology: "Minimax's is a React Redux application using React Router to manage the multiple routes. Animations are executed with jQuery and Typed.js is used for the text. The tic tac toe algorithm comes from an API and requests are handled with Axios and Redux Promise.",
    techLogos: [
      <img src={typed} alt="Typed.js" key="Typed.js" className="logo" />,
      <img src={react} alt="React" key="React" className="logo" />,
      <img src={redux} alt="Redux" key="Redux" className="logo" />,
      <img src={jquery} alt="jQuery" key="jQuery" className="logo" />,
    ]
  },
  {
    projectImage: pomodoro,
    link: "https://freddydumont.github.io/pomodoro-clock/",
    name: "Burmese Pomodoro",
    description: ["A time management tool based on the ", <a key={'pomodoro wiki'} href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank" rel="noopener noreferrer">Pomodoro Technique</a>, " allowing the user to set work intervals separated by short breaks. A soothing burmese bell sound annouces the end of a session."],
    technology: "Pomodoro is a React application using Bootstrap for the layout and Moment.js to format the timer.",
    techLogos: [
      <img src={react} alt="React" key="React" className="logo" />,
      <img src={bootstrap} alt="Bootstrap" key="Bootstrap" className="logo" />,
    ]
  },
]