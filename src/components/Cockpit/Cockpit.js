import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = ''

    if(props.showPersons){
        btnClass = 'red';
    }

    if(props.persons.length <= 2){
      assignedClasses.push('red');
    }
    if(props.persons.length <= 1){
      assignedClasses.push('bold');
    }

    return(
        <div>
            <h1 className={assignedClasses.join(' ')}> My React App!</h1>
            <button className={btnClass} onClick={props.clicked}>Show/Hide Persons</button>
        </div>
    );
};