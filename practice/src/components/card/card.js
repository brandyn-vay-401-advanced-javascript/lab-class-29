import React from "react";

const Cards = props => {
  return (
    <div className="card">
      <header>
        <h3>{props.cardContent.title}</h3>
      </header>
      <div className="content">{props.cardContent.copy}</div>
      <figure>
        <img
          src={props.cardContent.media.href}
          alt={props.cardContent.media.alt}
        />
        <figcaption>{props.cardContent.media.title}</figcaption>
      </figure>
      <nav className="links">
        <ul>
          {props.cardContent.links.map((link, i) => (
            <li key={i}>
              <a className={link.type} href={link.href} title={link.title}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Cards;
