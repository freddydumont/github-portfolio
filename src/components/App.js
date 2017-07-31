import React, { Component } from 'react';
import '../styles/App.css';
import data from '../cardData';
import SideContent from './SideContent';
import ProjectCard from './ProjectCard';

class App extends Component {
  render() {
    const createCards = () => {
      let cards = [];
      for (var i = 0; i < 1; i++) {
        // get appropriate data and populate props
        let { projectImage, link, name, description, technology } = data[i];
        cards.push(
          <ProjectCard projectImage={projectImage} link={link} name={name} description={description} technology={technology} />
        );
      }
      return cards;
    }

    return (
      <div className="App container">
        <div className="row">
          <aside className="col-sm-3 about-me text-center">
            <SideContent />
          </aside>
          <section className="col-sm-9">
            {createCards()}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
