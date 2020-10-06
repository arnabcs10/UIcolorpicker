import React from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { genaratePalette } from './colorHelpers';
function App() {
  console.log(genaratePalette(seedColors[1]));
  return (
    
    <div className="App">
      <Palette {...seedColors[2]}/>
    </div>
  );
}

export default App;
