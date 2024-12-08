import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const LandingPage: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
      <Text fontSize="md" fontWeight="bold" mb={4}>
        E-Commerce App
      </Text>
      <Text fontSize="4xl" fontWeight="bold" mb={4}>
        Welcome to Our E-Commerce Platform
      </Text>
      <Text fontSize="lg" mb={6}>
        Discover exclusive deals and shop your favorite items!
      </Text>
      <Button colorScheme="teal" size="lg" mb={4}>
        Start Shopping
      </Button>
    </Box>
  );
};

export default LandingPage;
