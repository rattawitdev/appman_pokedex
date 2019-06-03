import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  };

  render() {
    return (
      <div>
        <label>Find Pokemon</label>
        <input style={{ width: '900px', height: '30px', fontFamily: 'Atma', fontSize: '16px' }}
          placeholder='Find Pokemon'
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
