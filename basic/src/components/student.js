import React from "react";

const student = prop => {
  return (
    <div>
      <p>name: {prop.name}</p>
      <p>age: {prop.age}</p>
      <p>sex: {prop.sex}</p>
    </div>
  );
};

export default student;
