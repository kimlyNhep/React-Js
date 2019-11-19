import React, { Component } from 'react';
import Person from './Components/Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Kimly', age: 21 },
      { name: 'Rotha', age: 21 },
      { name: 'Chetha', age: 21 }
    ]
  };

  switchNameHandler = () => {
    // console.log('Was Clicked');
    this.setState({
      persons: [
        { name: 'Kimly Nhep', age: 21 },
        { name: 'Rotha Chhom', age: 21 },
        { name: 'Chetha Vuthy', age: 21 }
      ]
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          Hi There!
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
