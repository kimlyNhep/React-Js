import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {
  handleSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      },
      headers: {
        Authorization:
          "Client-ID f636a4277f34a1eff3e91d7d0bacc9e11a83b9b87b7d01344cb723770e3825d6"
      }
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
