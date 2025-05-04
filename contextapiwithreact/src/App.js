import React, { useState } from 'react';
import Main from './components/Main';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import MainTheme from './components/MainTheme';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        padding: '20px',
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        marginTop: '40px',
      }}
    >
      <h1>Context API Theme Example</h1>
      <button onClick={toggleTheme}>
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <MainTheme />
    </div>
  );
};

function App() {
  const [userName, setUserName] = useState('');

  return (
    <>
      <hr />
      <div style={{ padding: '20px' }}>
        <h4>Props Drilling Example</h4>
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Main userName={userName} />
      </div>
      <hr />
      <ThemeProvider>
        <ThemeToggler />
      </ThemeProvider>
    </>
  );
}

export default App;
