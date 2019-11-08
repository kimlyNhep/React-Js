import React from "react";
import Person from "./Person/Person";

const persons = prop =>
  prop.persons.map((person, index) => {
    return (
      <Person
        name={person.name}
        age={person.age}
        click={() => prop.clicked(index)}
        key={person.id}
        changed={event => prop.changed(event, person.id)}
      >
        I am a nice Guy!
      </Person>
    );
  });

export default persons;
