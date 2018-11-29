import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> My React App!</h1>
        <Person name="Praneeth" age="22" />
        <Person name="Anand" age="22">
           My Hobby is Football
        </Person>
      </div>
    );
  }
}

export default App;
