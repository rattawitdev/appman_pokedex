import './App.css';
import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = props => {
  const cards = props.cards.map(card => {
    return <PokemonCard key={card.id} onPokemonSelect={props.onPokemonSelect} card={card} />;
  });
  return <div className="pokemon-list">{cards}</div>;
};

export default PokemonList;