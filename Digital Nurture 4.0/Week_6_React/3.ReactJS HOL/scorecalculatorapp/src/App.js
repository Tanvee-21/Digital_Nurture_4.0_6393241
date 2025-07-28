import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore Name="Tanvee" School="GNITS" Total={460} Goal={5} />
    </div>
  );
}

export default App;
