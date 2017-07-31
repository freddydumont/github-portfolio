import React from 'react';

const ProjectCard = ({ projectImage }) => (
  <div className="col-sm-offset-2 col-sm-8 project">
    <img src={projectImage} alt="App in devices" className="img-responsive" />

    <h2 class="text-center"><a href="https://freddydumont.github.io/simon-game/" title="Application website">Poké(Si)mon</a></h2>
    <p>A port of the classic electronic game <a href="https://en.wikipedia.org/wiki/Simon_(game)" title="Wikipedia page of Simon game" target="_blank" rel="noopener noreferrer">Simon</a> with a Pokémon theme showcasing usage of Redux asynchronous actions.</p>
    <h4>Technology</h4>
    <p>Jobbie uses Bootstrap3 for a mobile-first layout, with jQuery for easy page manipulation. On the backend an Express/Node.js app lives on a Heroku dyno that acts as a middleware to scrape job sites and return the information to the user.</p>

    <div class="row text-center">
      <div class="col-xs-12">
        <img src="img/techlogos/jquery.png" class="techlogo" width="100" />
        <img src="img/techlogos/bootstrap.png" class="techlogo" width="100" />
        <img src="img/techlogos/node.png" class="techlogo" width="100" />
        <img src="img/techlogos/heroku.png" class="techlogo" width="100" />
      </div>
    </div>
    <div class="row text-center" style={{ margin: '20px' }}>
      <a class="btn btn-launch" href="http://jobb.ie" target="blank">Launch</a>
    </div>
  </div>
);

export default ProjectCard;