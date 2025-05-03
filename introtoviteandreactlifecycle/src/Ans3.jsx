import React, { useState, useEffect } from 'react';

function Ans3() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`Counter value changed: ${counter}`);
  }, [counter]);

  const increment = () => setCounter(prev => prev + 1);
  const decrement = () => setCounter(prev => prev - 1);
  const reset = () => setCounter(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>{' '}
      <button onClick={decrement}>Decrement</button>{' '}
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Ans3;
