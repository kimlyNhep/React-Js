import React from "react";
import ReactDom from "react-dom";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
              author="sam"
              time="Today at 4:45 PM"
              cmd="Hi"
              avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
          <CommentDetail
            author="Alex"
            time="Today at 6:45 PM"
            cmd="Hello"
            avatar={faker.image.avatar()}
          />
      </ApprovalCard>
          <ApprovalCard>
          <CommentDetail
            author="Jane"
            time="Today at 9:45 PM"
            cmd="How are you?"
            avatar={faker.image.avatar()}
          />   
      </ApprovalCard>     
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
