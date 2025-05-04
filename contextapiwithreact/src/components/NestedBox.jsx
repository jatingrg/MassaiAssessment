import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

function NestedBox() {
  const { theme } = useTheme();

  const styles = {
    padding: '20px',
    marginTop: '10px',
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#555',
    color: theme === 'light' ? '#000' : '#fff',
  };

  return (
    <div style={styles}>
      <p>This is a nested component. Current theme: <strong>{theme}</strong></p>
    </div>
  );
}

export default NestedBox;
