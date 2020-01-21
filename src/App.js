import React from 'react';
import './App.css';
import { Input } from './components/input /input.component';
import { Output } from './components/output/output.component';
import { Keyboard } from './components/keyboard/keyboard.component';

function App() {
  return (
    <div className="App">
      <div className='calc-board'>
        <Input />
        <Output />
        <Keyboard />
      </div>
        
    </div>
  );
}

export default App;
