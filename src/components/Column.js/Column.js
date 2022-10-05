import "./Column.scss";
import React from "react";


import Card from "../Card/Card";
import { mapOrder } from './../../utilities/sorts';

function Column({ column }) {
  const cards = mapOrder(column.cards, column.cardOrder, "id");
  return (
    <div className="column">
      <header>{column.title}</header>
      <ul className="card-list">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </ul>
      <footer>Add another card</footer>
    </div>
  );
}

export default Column;
