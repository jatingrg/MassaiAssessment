import React, { createContext, useContext, useState } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

const getTheme = (mode) => {
  return extendTheme({
    config: {
      initialColorMode: mode,
      useSystemColorMode: false,
    },
  });
};

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light'); 

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ChakraProvider theme={getTheme(themeMode)}>
        {children}
      </ChakraProvider>
    </ThemeContext.Provider>
  );
};
