import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = ''

    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1 className={assignedClasses.join(' ')}> My React App!</h1>
            <button className={btnClass} onClick={props.clicked}>Show/Hide Persons</button>
        </div>
    );
};

export default cockpit