import React, { Component } from 'react';
import '../styles/App.css';
import SideContent from './SideContent';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <SideContent />
          <aside className="col-sm-3 about-me about-side text-center">
            <SideContent />
          </aside>
        </div>
      </div>
    );
  }
}

export default App;
