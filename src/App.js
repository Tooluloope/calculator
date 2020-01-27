import React, { useContext } from 'react';
import './App.css';
import { Input } from './components/input /input.component';
import { Keyboard } from './components/keyboard/keyboard.component';
import { Toggle } from './components/toggle';
import { ThemeContext } from './components/context/theme.context';



function App() {
  const [state] =  useContext(ThemeContext)
  return (
    
      <div className={`${state? 'dark' : 'light'} App`}>
        <Toggle />
        <div className='calc-board'>
          <Input />
          <Keyboard />
        </div>
        
    </div>
    
  );
}

export default App;
