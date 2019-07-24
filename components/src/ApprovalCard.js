import React from "react";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const ApprovalCard = () => {
  return (
    <div className="ui card">
      <div className="card">
        <CommentDetail
          author="same"
          time="Today at 4:45 PM"
          cmd="Hi"
          avatar={faker.image.avatar()}
        />
        <CommentDetail
          author="Alex"
          time="Today at 6:45 PM"
          cmd="Hello"
          avatar={faker.image.avatar()}
        />
        <CommentDetail
          author="Jane"
          time="Today at 9:45 PM"
          cmd="How are you?"
          avatar={faker.image.avatar()}
        />
      </div>
    </div>
  );
};

export default ApprovalCard;
