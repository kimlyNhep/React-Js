import React, { Component } from 'react';
import classStyle from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { id: '001', name: 'Max', age: 21 },
      { id: '002', name: 'Mary', age: 34 },
      { id: '003', name: 'Stev', age: 25 }
    ],
    showPerson: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStatedFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { id: '001', name: newName, age: 21 },
        { id: '001', name: 'Mary', age: 24 },
        { id: '001', name: 'Mark', age: 29 }
      ],
      showPerson: false
    });
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    console.log('[App.js] render');
    var persons = null;
    if (this.state.showPerson) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler}
        />
      );
    }

    return (
      <div className={classStyle.App}>
        <Cockpit
          persons={this.state.persons}
          showPerson={this.state.showPerson}
          toggle={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
