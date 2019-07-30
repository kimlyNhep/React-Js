import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, ErrorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ ErrorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.lat && !this.state.ErrorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.let && this.state.ErrorMessage) {
      return <div>Error: {this.state.ErrorMessage}</div>;
    }
    return <Spinner />;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
