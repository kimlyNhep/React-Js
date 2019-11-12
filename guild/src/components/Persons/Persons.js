import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(prop, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps', prop);
  //   return state;
  // }

  shouldComponentUpdate(nextProp, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
  }

  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.prop.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
export default Persons;
