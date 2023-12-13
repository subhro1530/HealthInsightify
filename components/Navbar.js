// components/Navbar.js
import { Flex, Box, Spacer, Button, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex p="4" bg="teal.500">
      <Box>
        <Image src="/logo.png" alt="Logo" boxSize="40px" />
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="teal" mr="4">
          Home
        </Button>
        <Button colorScheme="teal">About</Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
