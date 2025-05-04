import { Flex, Box, Link as ChakraLink, Stack, useBreakpointValue } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex as="nav" p={4} bg="gray.100" justify="center">
      <Stack direction={isMobile ? 'column' : 'row'} spacing={6} align="center">
        {navItems.map(({ label, path }) => (
          <ChakraLink
            key={label}
            as={NavLink}
            to={path}
            _hover={{ color: 'blue.500' }}
            _activeLink={{ fontWeight: 'bold', color: 'blue.600' }}
            exact="true"
          >
            {label}
          </ChakraLink>
        ))}
      </Stack>
    </Flex>
  );
}
