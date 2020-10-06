import React from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { genaratePalette } from './colorHelpers';
function App() {
  console.log();
  return (
    
    <div className="App">
      <Palette palette={genaratePalette(seedColors[4])}/>
    </div>
  );
}

export default App;
