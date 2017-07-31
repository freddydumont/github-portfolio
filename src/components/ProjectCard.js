import React from 'react';

const ProjectCard = ({ projectImage, link, name, description, technology }) => (
  <div className="col-sm-offset-2 col-sm-8 project">
    <img src={projectImage} alt="App in devices" className="img-responsive" />

    <h2 className="text-center"><a href={link} title="Application website">{name}</a></h2>
    <p>{description}</p>
    <h4>Technology</h4>
    <p>{technology}</p>

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