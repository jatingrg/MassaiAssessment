import React from 'react';
import { useAuth } from './AuthContext';

const Main = () => {
  const { isAuthenticated } = useAuth();

  return (
    <main>
      {isAuthenticated ? (
        <p>Welcome back, User!</p>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </main>
  );
};

export default Main;
