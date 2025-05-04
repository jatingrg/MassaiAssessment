import React from 'react';
import BottomMain from './BottomMain';

function Main({ userName }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Main Component</h2>
      <BottomMain userName={userName} />
    </div>
  );
}

export default Main;
