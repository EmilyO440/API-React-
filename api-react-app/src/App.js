// App.js
import React from 'react';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CRUD App</h1>
      </header>
      <div className="container">
        <Home />
      </div>
    </div>
  );
}

export default App;
