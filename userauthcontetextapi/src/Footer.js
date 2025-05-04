import React from 'react';
import { useAuth } from './AuthContext';

const Footer = () => {
  const { isAuthenticated } = useAuth();

  return (
    <footer>
      {isAuthenticated ? <p>Welcome, User</p> : <p>Please log in</p>}
    </footer>
  );
};

export default Footer;
