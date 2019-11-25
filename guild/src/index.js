import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

<<<<<<< HEAD
ReactDOM.render(<App />, document.getElementById("root"));
=======
ReactDOM.render(
  <App appTitle='Person Mananger' />,
  document.getElementById('root')
);
>>>>>>> 3c47a62bf22f9089fd2564f33389ff861968c8b6

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
