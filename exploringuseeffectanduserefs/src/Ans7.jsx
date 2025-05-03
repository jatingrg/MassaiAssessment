import React, { useState, useEffect } from 'react';

function Ans7() {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    console.log(`State updated: ${randomNumber}`);
  }, [randomNumber]);

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100));
  };

  return (
    <div>
      <h1>Random Number: {randomNumber}</h1>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </div>
  );
}

export default Ans7;
