import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
              {name:"Praneeth",age:22},
              {name:"Anand",age:22}
            ]
  }
  
  switchNameHandler = () => {
    //console.log("Was Clicked");
    //this.state.persons[0].name = "N Praneeth";
    this.setState({persons:[
                    {name:"N Praneeth",age:22},
                    {name:"Anand",age:22}
                   ]});
  }

  render() {
    return (
      <div className="App">
        <h1> My React App!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
           My Hobby is Football
        </Person>
      </div>
    );
  }
}

export default App;
