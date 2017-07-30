import React, { Component } from 'react';
import '../styles/App.css';
import SideContent from './SideContent';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <SideContent />
        </div>
      </div>
    );
  }
}

export default App;
