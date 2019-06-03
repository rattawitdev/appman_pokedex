import React from 'react';

class PokemonCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { name, imageUrl } = this.props.card;
    return (
      <div onClick={() => this.props.onPokemonSelect(this.props.card)} style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={name} src={imageUrl} />
      </div>
    );
  }
};

export default PokemonCard;