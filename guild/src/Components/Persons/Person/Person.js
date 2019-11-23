import React, { Component } from 'react';
import classStyle from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClasses';
import Authentication from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = Authentication;
  // we assign contextType of the contextAPI to
  // Enable to use properties of contextAPI in the life-cycle method

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.Authenticated);
  }

  render() {
    console.log('[Person.js] rendering');
    return (
      <Aux>
        {this.context.Authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in</p>
        )}

        <p onClick={this.props.clicked}>
          I am {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
        />
      </Aux>
    );
  }
}

export default withClass(Person, classStyle.Person);
