import React, { useRef, useEffect } from 'react';

function Ans6() {
  const countRef = useRef(0);

  useEffect(() => {
    console.log('Component Mounted');
  }, []);

  const handleClick = () => {
    countRef.current += 1;
    console.log(`Button clicked ${countRef.current} times`);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default Ans6;
