import React from 'react';

const Quote1 = () => {
  return (
    <>
    <div className="container">
    <div id="quote-box">
      <div id="text">
        <h2>"La vida es una oportunidad, benefíciate de ella. La vida es belleza, admírala. La vida es un sueño, alcánzalo. La vida es un desafío, enfréntalo. La vida es un juego, juégalo."</h2>
      </div>
      <div id="author">
        <p>-Madre Teresa</p>
      </div>
      <a href="/Quote2">
      <button id="new-quote">Nueva frase</button>
      </a>
    </div>
    </div>
    </>
  );
}
export default Quote1;