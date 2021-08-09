import React, { useState, useCallback, useMemo } from 'react';
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

  const list = useMemo(() => [3, 1, 2, 4, 0], []);

  return (
    <div className="app">
      <h1>{showText ? 'Hi there!' : ''}</h1>
      <DemoOutput list={list} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={textHandler}>Toggle text</Button>
    </div>
  );
}

export default App;
