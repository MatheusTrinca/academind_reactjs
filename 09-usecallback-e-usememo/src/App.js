import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  console.log('APP RENDERING');

  const [showText, setShowText] = useState(false);
  const [allowToggle, setAllowTogle] = useState(false);

  const textHandler = useCallback(() => {
    if (allowToggle) {
      setShowText(prevState => !prevState);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowTogle(true);
  };

  return (
    <div className="app">
      <h1>{showText ? 'Hi there!' : ''}</h1>
      <DemoOutput />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={textHandler}>Toggle text</Button>
    </div>
  );
}

export default App;
