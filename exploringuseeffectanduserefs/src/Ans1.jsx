import React, { useState, useEffect } from 'react';

function LoggingComponent() {
  useEffect(() => {
    console.log('Component Mounted');

    return () => {
      console.log('Component Unmounted');
    };
  }, []);

  return <div>Ans1</div>;
}

function Ans1() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(prev => !prev)}>
        {show ? 'Hide' : 'Show'} Component
      </button>
      {show && <LoggingComponent />}
    </div>
  );
}

export default Ans1;
