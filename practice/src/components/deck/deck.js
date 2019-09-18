import React from "react";
import {When} from '../if/if.js';

const Deck = props => {
  const deck = props.deck || {};
  return (
    <section className="deck">
      <When condition={deck.title}>
        <header><h2>{deck.title}</h2></header>
      </When>
      {props.children}
    </section>
  );
};

export default Deck;
