import React, { Component } from 'react';
import classStyle from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClasses';

class Person extends Component {
  componentDidMount() {
    this.inputElement.focus();
  }

  render() {
    console.log('[Person.js] rendering');
    return (
      <Aux>
        <p onClick={this.props.clicked}>
          I am {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
          ref={inputEl => {
            this.inputElement = inputEl;
          }}
        />
      </Aux>
    );
  }
}

export default withClass(Person, classStyle.Person);
