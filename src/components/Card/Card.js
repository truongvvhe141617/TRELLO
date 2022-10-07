import './Card.scss';
import React from 'react';
function Card({ card }) {
    return (
      <div className="card-item">
        {card.cover && <img src={card.cover} className="card-cover" alt="" onMouseDown={(e) => e.preventDefault()} />}
  
        <div className="title">{card.title}</div>
      </div>
    );
  }
export default Card;