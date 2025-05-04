import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useThemeContext } from './ThemeContext';

const Footer = () => {
  const { themeMode } = useThemeContext();

  return (
    <Box
      as="footer"
      p={4}
      bg={themeMode === 'light' ? 'teal.200' : 'teal.700'}
      color="white"
      position="sticky"
      bottom="0"
      width="full"
      textAlign="center"
    >
      <Text>Footer Content</Text>
    </Box>
  );
};

export default Footer;
