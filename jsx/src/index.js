import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
