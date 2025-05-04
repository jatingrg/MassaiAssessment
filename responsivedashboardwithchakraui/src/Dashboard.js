import React from 'react';
import { Flex } from '@chakra-ui/react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './Footer';

const Dashboard = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Navbar />
      <Flex flex="1">
        <Sidebar />
        <MainContent />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Dashboard;
