import React from 'react';
import BottomMainRight from './BottomMainRight';

function BottomMain({ userName }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Bottom Main Component</h3>
      <BottomMainRight userName={userName} />
    </div>
  );
}

export default BottomMain;
