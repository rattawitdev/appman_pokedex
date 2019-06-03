import React, { Component } from 'react'
import './App.css'
import cards from './api/cards';
import SearchBar from './SearchBar';
import PokemonList from './PokemonList';
import PokemonSelectedList from './PokemonSelectedList';
// import Modal from './Modal';

// const COLORS = {
//   Psychic: "#f8a5c2",
//   Fighting: "#f0932b",
//   Fairy: "#c44569",
//   Normal: "#f6e58d",
//   Grass: "#badc58",
//   Metal: "#95afc0",
//   Water: "#3dc1d3",
//   Lightning: "#f9ca24",
//   Darkness: "#574b90",
//   Colorless: "#FFF",
//   Fire: "#eb4d4b"
// }

class App extends Component {
  state = {
    Pokemoncards: [],
    PokemonSelecteds: []
  };

  onSearchChange = async term => {
    const response = await cards.get('api/cards', {
      params: {
        limit: 30,
        name: term
      }
    });

    this.setState({ Pokemoncards: response.data.cards });
  };

  onPokemonSelect = pokemon => {
    this.setState({
      PokemonSelecteds: [...this.state.PokemonSelecteds, pokemon],
      Pokemoncards: this.state.Pokemoncards.filter(card => card !== pokemon)
    });
  };

  onPokemonRemove = pokemon => {
    this.setState({
      PokemonSelecteds: this.state.PokemonSelecteds.filter(card => card !== pokemon),
      Pokemoncards: [...this.state.Pokemoncards, pokemon]
    });
  };

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={this.onSearchChange} />
        <label>My Pokedex:</label>
        <PokemonSelectedList cards={this.state.PokemonSelecteds} onPokemonRemove={this.onPokemonRemove} />
        <label>Pokemon Search Result:</label>
        <PokemonList cards={this.state.Pokemoncards} onPokemonSelect={this.onPokemonSelect} />
      </div>
    )
  }
}

export default App
