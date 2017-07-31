import React from 'react';

const ProjectCard = ({ projectImage, link, name, description, technology, techLogos }) => (
  <div className="col-sm-offset-2 col-sm-8 project">
    <img src={projectImage} alt="App in devices" className="img-responsive" />

    <h2 className="text-center"><a href={link} title="Application website">{name}</a></h2>
    <p>{description}</p>
    <h4>Technology</h4>
    <p>{technology}</p>

    <div className="row text-center">
      <div className="col-xs-12 tech-logos">
        {techLogos}
      </div>
    </div>

    <div className="row text-center" style={{ margin: '20px' }}>
      <a className="btn btn-launch" href="http://jobb.ie" target="blank">Launch</a>
    </div>
  </div>
);

export default ProjectCard;