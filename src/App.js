import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import './App.css';

function App() {
  const cards = ['users', 'clients', 'products', 'sessions', 'categories', 'directions', 'genders', 'sessionsProducts'];

  function toTitleCase(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }

  return (
    <div>
      <Header />
      <div className="container" id="cardContainer">
        {cards.map(cardName => (
          <Card
            key={cardName}
            title={toTitleCase(cardName)}
            onButtonClick={() => window.location.href = `${cardName}.html`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;