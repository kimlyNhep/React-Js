import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";

class App extends Component {
  state = {
    persons: [
      { id: "001", name: "Max", age: 21 },
      { id: "002", name: "Mary", age: 34 },
      { id: "003", name: "Stev", age: 25 }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { id: "001", name: newName, age: 21 },
        { id: "001", name: "Mary", age: 24 },
        { id: "001", name: "Mark", age: 29 }
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
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherite",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    var persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler}
          />
        </div>
      );
      style.backgroundColor = "red";
    }
    return <div className="App">{persons}</div>;
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi There!")
    // );
  }
}

export default App;
