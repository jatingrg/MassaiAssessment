import React from 'react';
import { AuthProvider } from './AuthContext';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Main />
      <Footer />
    </AuthProvider>
  );
};

export default App;
