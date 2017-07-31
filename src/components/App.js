import React, { Component } from 'react';
import '../styles/App.css';
import projectImages from '../projectImages';
import SideContent from './SideContent';
import ProjectCard from './ProjectCard';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <aside className="col-sm-3 about-me about-side text-center">
          <aside className="col-sm-3 about-me text-center">
            <SideContent />
          </aside>
          <section className="col-sm-9">
            <ProjectCard projectImage={projectImages[0]} />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
