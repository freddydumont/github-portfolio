import React from 'react';
// projects
import pokesimon from './images/pokesimon.png';
import pomodoro from './images/pomodoro.png';
import tictactoe from './images/tictactoe.png';
import digispeed from './images/digispeed.png';
import labyrinth from './images/labyrinth.png';
// tech logos
import howler from './images/techlogos/howler.svg'
import react from './images/techlogos/react.svg'
import redux from './images/techlogos/redux.svg'
import jquery from './images/techlogos/jquery.png'
import typed from './images/techlogos/typed.png'
import bootstrap from './images/techlogos/bootstrap.png'
import moment from './images/techlogos/momentjs.jpg'
import gatsby from './images/techlogos/gatsby.svg'
import sass from './images/techlogos/sass.svg'
import netlify from './images/techlogos/netlify.svg'
import tachyons from './images/techlogos/tachyons.png'

export default [
  {
    projectImage: digispeed,
    link: "https://www.digispeed.io",
    name: "digispeed.io",
    description: "This website was built for a client who needed an online presence for their business. The provided company logo influenced the design decisions. We chose to keep a simple document feeling to complement its black and white nature. Smooth animations and well designed icons really improve the usability of the site.",
    technology: "I believe in using the right tool for the job at hand. In this case, we needed a simple framework to quickly design and build a landing page. Gatsby is the obvious choice in this category, having all the features needed for easy navigation and extensibility, already setup with React.js. Bootstrap and Sass are used to power the CSS, and Netlify deploys the website at minimal costs.",
    techLogos: [
      <img src={gatsby} alt="Gatsby" key="Gatsby" className="logo" />,
      <img src={react} alt="React" key="React" className="logo" />,
      <img src={sass} alt="Sass" key="Sass" className="logo" />,
      <img src={bootstrap} alt="Bootstrap" key="Bootstrap" className="logo" />,
      <img src={netlify} alt="Netlify" key="Netlify" className="logo" />,
    ]
  },
  {
    projectImage: labyrinth,
    link: "https://freddydumont.github.io/the-labyrinth-roguelike/",
    name: "The Labyrinth (beta)",
    description: ['A roguelike game based on the ancient Greek myth of ', <a key={'theseus'} href="https://en.wikipedia.org/wiki/Theseus#The_myth_of_Theseus_and_the_Minotaur" title="Wikipedia page of Theseus" target="_blank" rel="noopener noreferrer">Theseus and the Minotaur</a>, ', featuring dungeon-crawling, leveling and permadeath. The goal is to reach the depth of the labyrinth and slay the Minotaur before he devours the helpless Athenian youths sent as tribute.'],
    technology: ["The Labyrinth makes use of the ", <a key={'rotjs'} href="http://ondras.github.io/rot.js/hp/" title="rot.js homepage" target="_blank" rel="noopener noreferrer">rot.js</a>, " library to manage some aspects of roguelike game development, React.js for the front end and Tachyons for the CSS. A leaderboard will be implemented in Firebase or some other serveless solution."],
    techLogos: [
      <img src={react} alt="React" key="React" className="logo" />,
      <img src={tachyons} alt="Tachyons" key="tachyons" className="logo" />,
    ]
  },
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
    description: ["A time management tool based on the ", <a key={'pomodoro wiki'} href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank" rel="noopener noreferrer">Pomodoro Technique</a>, " allowing the user to set work intervals separated by short breaks. A soothing burmese bell sound annouces the end of a session—and the start of a new one."],
    technology: "Pomodoro is a React application using Bootstrap for the layout and Moment.js to format the timer.",
    techLogos: [
      <img src={react} alt="React" key="React" className="logo" />,
      <img src={moment} alt="Moment" key="moment" className="logo" />,
      <img src={bootstrap} alt="Bootstrap" key="Bootstrap" className="logo" />,
    ]
  },
]