import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import { createClient } from "@supabase/supabase-js";
import './App.css';

const supabase = createClient("https://ultkcnizwluuxfjxjsxk.supabase.co", 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsdGtjbml6d2x1dXhmanhqc3hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyOTM2MjIsImV4cCI6MjAyODg2OTYyMn0.aQPg6L6IK5kZfxZcdSJKLwOlknoti04xTYdEch3eKQ4");


function App() {

  const [categorias, setCategorias] = useState([]);

  useEffect(()=>{
    getCategorias();
  },[]);

  async function getCategorias(){
    const {data} = await supabase.from("categorias").select();
    setCategorias(data);
  }

  const cards = ['users', 'clients', 'products', 'sessions', 'categories', 'directions', 'genders', 'sessionsProducts'];

  function toTitleCase(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }

  return (
    <div>
      <ul>
        {categorias.map((categorias)=>(
        <li key={categorias.nombre}>{categorias.nombre}</li>
        ))}
      </ul>
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