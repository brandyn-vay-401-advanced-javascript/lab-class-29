import React from "react";
import {When} from '../if/if.js'

const Cards = props => {
  const card = props.content || {};
  return (
    <div className="card">
      <When condition={card.title}>
        <header><h3>{card.title}</h3></header>
      </When>
      <When condition={card.copy}>
        <div className="content">{card.copy}</div>
      </When>
      <When condition={card.media.href}>
        <figure>
          <img
            src={card.media.href}
            alt={card.media.alt}
          />
          <figcaption>{card.media.title}</figcaption>
        </figure>
      </When>
      <When condition={card.links.length}>
        <nav className="links">
          <ul>
            {card.links.map((link, i) => (
              <li key={i}>
                <a className={link.type} href={link.href} title={link.title}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </When>
    </div>
  );
};

export default Cards;
