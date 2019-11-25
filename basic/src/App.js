import React, { useState } from "react";
import "./App.css";
import Student from "./components/student";

function App() {
  const [getStudnet, setStudent] = (useState = () => {
    studnets: [{ name: "kimly", age: "21", sex: "Male" }];
  });

  const changeNamehandle = () => {
    setStudent({
      studnets: [{ name: "Mark", age: "25", sex: "Male" }]
    });
  };

  return (
    <div className="Student">
      <Student
        name={getStudnet.studnets[0].name}
        age={getStudnet.studnets[0].age}
        sex={getStudnet.studnets[0].sex}
      />
      <button onClick={changeNamehandle}>Switch student</button>
    </div>
  );
}

export default App;
