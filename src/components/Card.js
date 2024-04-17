import React from 'react';
import './Card.css'; // Asegúrate de migrar y ajustar los estilos relevantes

function Card({ title, onButtonClick }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae metus euismod, rhoncus metus eu, vulputate odio. Cras ac efficitur eros. Sed ultrices euismod dolor, ac pharetra odio lacinia sed.</p>
      <button onClick={onButtonClick}>Ir a {title}</button>
    </div>
  );
}

export default Card;
