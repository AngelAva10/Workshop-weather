import React from 'react';
import './App.css';
import { Forecast } from './components/Forecast';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Forecast/>
      </header>
    </div>
  );
}

export default App;
