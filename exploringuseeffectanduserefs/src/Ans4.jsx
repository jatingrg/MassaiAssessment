import React, { useRef } from 'react';

function Ans4() {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && !inputRefs[index].current.value) {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {inputRefs.map((ref, index) => (
          <input
            key={index}
            ref={ref}
            type="text"
            maxLength="1"
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{
              width: '40px',
              height: '40px',
              textAlign: 'center',
              fontSize: '18px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Ans4;
