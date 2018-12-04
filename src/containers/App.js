import React, { Component } from 'react';
import classes from './App.module.css';
//import Radium, { StyleRoot } from 'radium'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons:[
              {id:'abc1',name:"Praneeth",age:22},
              {id:'pqr1',name:"Anand",age:22}
            ],
    showPersons:false
  }
  
  switchNameHandler = (newName) => {
    //console.log("Was Clicked");
    //this.state.persons[0].name = "N Praneeth";
    this.setState({persons:[
                    {name:newName,age:22},
                    {name:"Anand",age:22}
                   ]});
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //const person = Object.assign({},this.state.persons[personIndex]);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    //const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  render() {
    /*const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
       ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      } 
    };*/

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <Persons persons={this.state.persons}
                 clicked={this.deletePersonHandler}
                 changed={this.nameChangedHandler}
        />
      );
      //style.backgroundColor = 'red';
      /* style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      } */
    }

    return (
      <div className={classes.App}>
        <Cockpit persons={this.state.persons} 
                 showPersons={this.state.showPersons} 
                 clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

//export default Radium(App);
export default(App);