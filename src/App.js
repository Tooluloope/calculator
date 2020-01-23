import React from 'react';
import './App.css';
import { Input } from './components/input /input.component';
import { Output } from './components/output/output.component';
import { Keyboard } from './components/keyboard/keyboard.component';
import { Toggle } from './components/toggle';
import { ThemeProvider } from './components/context/theme.context';
import { InputProvider } from './components/context/input.context';

function App() {
  return (
    <InputProvider >
    <ThemeProvider>
      <div className="App">
        <Toggle />
        <div className='calc-board'>
          <Input />
          <Output />
          <Keyboard />
        </div>
        
    </div>
    
    </ThemeProvider>
    </InputProvider>
    
  );
}

export default App;
