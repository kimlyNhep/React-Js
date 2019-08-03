import React from "react";
import unsplash from "../api/unsplash";
import ImagesList from "./ImagesList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { Images: [] };

  handleSubmit = async term => {
    const respone = await unsplash.get(`/search/photos?page=5&per_page=30`, {
      params: {
        query: term
      }
    });

    this.setState({ Images: respone.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImagesList images={this.state.Images} />
      </div>
    );
  }
}

export default App;
