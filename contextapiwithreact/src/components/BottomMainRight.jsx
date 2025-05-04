import React from 'react';

function BottomMainRight({ userName }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h4>Bottom Main Right Component</h4>
      <p>User's Name: <strong>{userName || 'No name entered'}</strong></p>
    </div>
  );
}

export default BottomMainRight;
