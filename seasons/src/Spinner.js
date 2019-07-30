import React from "react";

const Spinner = props => {
  console.log(props);
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading..."
};
export default Spinner;
