import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment search-bar" style={{ marginTop: "10px" }}>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <input
            className="text"
            type="text"
            placeholder="search videos"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
