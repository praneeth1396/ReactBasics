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
  
  switchNameHandler = (newName) => {
    //console.log("Was Clicked");
    //this.state.persons[0].name = "N Praneeth";
    this.setState({persons:[
                    {name:newName,age:22},
                    {name:"Anand",age:22}
                   ]});
  }

  nameChangedHandler = (event) => {
    this.setState({persons:[
                    {name:"Praneeth",age:22},
                    {name:event.target.value,age:22}
                  ]});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1> My React App!</h1>
        <button style={style} onClick={this.switchNameHandler.bind(this,"Narasimha Praneeth")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person 
          change={this.nameChangedHandler}
          click={this.switchNameHandler.bind(this,"N Praneeth")}
          name={this.state.persons[1].name} age={this.state.persons[1].age}>
           My Hobby is Football
        </Person>
      </div>
    );
  }
}

export default App;
