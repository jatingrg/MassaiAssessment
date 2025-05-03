import React, { useState, useEffect } from 'react';

function Ans2() {
  const [joke, setJoke] = useState(null);
  const [fetchTrigger, setFetchTrigger] = useState(0);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        setJoke(data);
      } catch (error) {
        console.error('Failed to fetch joke:', error);
      }
    };

    fetchJoke();
  }, [fetchTrigger]);

  const getAnotherJoke = () => {
    setFetchTrigger(prev => prev + 1);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {joke ? (
          <>
            <h3>{joke.setup}</h3>
            <p><strong>{joke.punchline}</strong></p>
          </>
        ) : (
          <p>Loading joke...</p>
        )}
      </div>
      <button onClick={getAnotherJoke} style={styles.button}>
        Get Another Joke
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    fontFamily: 'sans-serif'
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '300px',
    color:"black",
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    marginBottom: '20px'
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Ans2;
