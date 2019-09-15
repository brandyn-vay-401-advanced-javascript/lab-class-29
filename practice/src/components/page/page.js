import React from "react";

import Deck from "../deck/deck.js";
import Card from "../card/card.js";

const Page = props => {
  const content = props.content || [];

  return (
    <>
      {content.map((deck, i) => {
        const cards = deck.records.map(card => {
          return <Card cardContent={card} />;
        });
        return <Deck deckContent={deck}>{cards}</Deck>;
      })}

    </>
  );
};

export default Page;
