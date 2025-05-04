import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Users from './Users';
import UserDetails from './UserDetails';

const App = () => {
  return (
    <div>
      <h1>User App</h1>
      <nav>
        <Link to="/users">Users List</Link>
      </nav>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />} />
      </Routes>
    </div>
  );
};

export default App;
