// App.jsx
import React, { useContext } from 'react';
import {
  Box,
  Flex,
  Grid,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { AuthContext } from './AuthContext';

function App() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { colorMode, toggleColorMode } = useColorMode();

  const navBg = useColorModeValue('gray.100', 'gray.700');
  const cardBg = useColorModeValue('gray.200', 'gray.600');
  const footerBg = useColorModeValue('gray.300', 'gray.800');
  const footerTextColor = useColorModeValue('black', 'white');

  return (
    <>
      <Flex as="nav" p="4" bg={navBg} justifyContent="space-between">
        <Button onClick={toggleAuth}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </Button>
        <Button onClick={toggleColorMode}>
          Toggle to {colorMode === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
      </Flex>

      <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap="4" p="4">
        {['Card 1', 'Card 2', 'Card 3'].map((card) => (
          <Box key={card} p="4" shadow="md" bg={cardBg}>
            {card}
          </Box>
        ))}
      </Grid>

      <Box as="footer" p="4" bg={footerBg} color={footerTextColor}>
        Footer Content
      </Box>
    </>
  );
}

export default App;
