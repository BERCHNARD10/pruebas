import React from 'react';
import './App.css';

function App() {
  const greeting = 'Hola Mundo!';
  return (
    <div className="App">
      <header className="App-header">
        <p>{greeting}</p>
        <p>{undefinedVariable}</p> {/* Error: la variable no está definida */}
      </header>
    </div>
  );
}

export default App;
