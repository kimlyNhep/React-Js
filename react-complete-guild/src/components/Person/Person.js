import React from 'react';
import './Person.css';

const person = prop => {
  return (
    <div className='Person'>
      <p onClick={prop.click}>
        I'm {prop.name} and I am {prop.age} years old!
      </p>
      <p>{prop.children}</p>
      <input type='text' onChange={prop.changed} value={prop.name} />
    </div>
  );
};

export default person;
