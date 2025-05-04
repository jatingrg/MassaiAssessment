import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useAuth } from './AuthContext';
import { useBreakpointValue } from '@chakra-ui/react';

const Sidebar = () => {
  const { isLoggedIn } = useAuth();
  const displaySidebar = useBreakpointValue({ base: 'none', md: 'block' });

  return (
    displaySidebar && (
      <Box w={{ base: 'full', md: '250px' }} bg="teal.100" p={4}>
        {isLoggedIn && <Text>Welcome, User!</Text>}
      </Box>
    )
  );
};

export default Sidebar;
