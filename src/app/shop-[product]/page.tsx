import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const ProductPage = () => {
  return (
    <Box p={5}>
      <Text fontSize="3xl" mb={4}>Product Name</Text>
      <Text fontSize="lg" mb={4}>Description of the product</Text>
      <Text fontSize="xl" mb={4}>Price: $99.99</Text>
      <Button colorScheme="blue" size="lg">Add to Cart</Button>
    </Box>
  );
};

export default ProductPage;
