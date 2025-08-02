import React, { useState } from 'react';

const EventExamples = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(prev => prev + 1);
  };

  const sayHello = () => {
    console.log('Hello! This is a static message.');
    alert('Hello! This is a static message.');
  };

  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const decrement = () => {
    setCounter(prev => prev - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleSyntheticClick = (event) => {
    console.log(event);
    alert('I was clicked');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Counter Example</h2>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h2>Say Welcome Example</h2>
      <button onClick={() => sayWelcome('Welcome!')}>Say Welcome</button>

      <h2>Synthetic Event Example</h2>
      <button onClick={handleSyntheticClick}>Click Me</button>
    </div>
  );
};

export default EventExamples;
