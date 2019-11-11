import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = prop => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };
  return (
    <div className='Person' style={style}>
      <p onClick={prop.click}>
        I'm {prop.name} and I am {prop.age} years old!
      </p>
      <p>{prop.children}</p>
      <input type='text' onChange={prop.changed} value={prop.name} />
    </div>
  );
};

export default Radium(person);
