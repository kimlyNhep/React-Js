import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };

  handleTermSubmit = async term => {
    const respone = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videos: respone.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.handleTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
