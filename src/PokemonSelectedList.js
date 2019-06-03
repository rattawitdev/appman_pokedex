import './App.css';
import React from 'react';
import PokemonSelectedCard from './PokemonSelectedCard';

const PokemonSelectedList = props => {
  //console.log(props.cards);

  const cards = props.cards.map(card => {
    return <PokemonSelectedCard key={card.id} onPokemonRemove={props.onPokemonRemove} card={card} />;
  });
  return <div className="pokemon-list">{cards}</div>;
};

export default PokemonSelectedList;