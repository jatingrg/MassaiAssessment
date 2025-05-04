import React from 'react';
import { Box, Grid, Text } from '@chakra-ui/react';

const MainContent = () => {
  return (
    <Box flex="1" p={4}>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4}>
        {Array.from({ length: 6 }, (_, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md">
            <Text>Product {index + 1}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default MainContent;
