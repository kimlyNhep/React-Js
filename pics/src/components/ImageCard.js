import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Span: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount = () => {
    this.imageRef.current.addEventListener("load", this.setSpan);
  };

  setSpan = () => {
    const Height = this.imageRef.current.clientHeight;
    const Span = Math.ceil(Height / 10);
    this.setState({ Span });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.Span}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
