// App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import { Box } from '@chakra-ui/react';

function Home() {
  return <Box p={4}>Welcome to Home</Box>;
}
function About() {
  return <Box p={4}>About Us</Box>;
}
function Services() {
  return <Box p={4}>Our Services</Box>;
}
function Contact() {
  return <Box p={4}>Contact Us</Box>;
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
