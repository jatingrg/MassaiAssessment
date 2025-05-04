import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ margin: 20 }}>
      <Link to="/" style={{ margin: 10 }}>Home</Link>
      <Link to="/about" style={{ margin: 10 }}>About</Link>
      <Link to="/contact" style={{ margin: 10 }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
