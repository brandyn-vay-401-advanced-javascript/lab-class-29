import React from "react";

const Deck = props => {
  return (
    <section className="deck">
      <header>
        <h2>{props.deckContent.title}</h2>
      </header>
      {props.children}
    </section>
  );
};

export default Deck;
