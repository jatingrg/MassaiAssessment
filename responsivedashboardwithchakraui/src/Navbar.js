import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useAuth } from './AuthContext';
import { useThemeContext } from './ThemeContext';

const Navbar = () => {
  const { isLoggedIn, toggleAuth } = useAuth();
  const { toggleTheme } = useThemeContext();

  return (
    <Flex as="nav" p={4} justify="space-between" bg="teal.500" color="white" align="center">
      <Text fontSize="xl">Dashboard</Text>
      <Flex gap={4}>
        <Button onClick={toggleAuth}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </Button>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
