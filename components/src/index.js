import React from "react";
import ReactDom from "react-dom";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
