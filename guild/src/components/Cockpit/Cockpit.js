import React from 'react';
import classStyle from './Cockpit.css';

const Cockpit = prop => {
  const classes = [];
  let btnClass = '';

  if (prop.showPerson) {
    btnClass = classStyle.Red;
  }

  if (prop.persons.length <= 2) {
    classes.push(classStyle.red); // classes = ['red']
  }
  if (prop.persons.length <= 1) {
    classes.push(classStyle.bold);
  }
  return (
    <div className={classStyle.Cockpit}>
      <h1>Persons Management</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={prop.toggle}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
