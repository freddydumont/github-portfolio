import React, { Component } from 'react';
import '../styles/App.css';
import data from '../cardData';
import SideContent from './SideContent';
import ProjectCard from './ProjectCard';
import MobileFooter from './MobileFooter';
import SeeMore from './SeeMore';

class App extends Component {
  render() {
    const createCards = () => {
      let cards = [];
      for (var i = 0; i < 4; i++) {
        // get appropriate data and populate props
        let { projectImage, link, name, description, technology, techLogos } = data[i];
        cards.push(
          <ProjectCard key={name} projectImage={projectImage} link={link} name={name} description={description} technology={technology} techLogos={techLogos} />
        );
      }
      return cards;
    }

    return (
      <div className="App container">
        <div className="row">
          <main>
            <section className="col-sm-3 about-me text-center">
              <SideContent />
            </section>
            <section className="col-sm-9 col-sm-offset-3">
              {createCards()}
              <SeeMore />
            </section>
          </main>
          <MobileFooter />
        </div>
      </div>
    );
  }
}

export default App;
