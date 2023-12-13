// components/HeroSection.js
import { Box, Heading, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <Box
        bgImage="url('/hero-bg.jpg')"
        h="400px"
        bgSize="cover"
        bgPosition="center"
      >
        <Box p="8">
          <Heading color="white" mb="4">
            Welcome to HealthInsightify
          </Heading>
          <Button colorScheme="teal">Get Started</Button>
        </Box>
      </Box>
    </motion.div>
  );
};

export default HeroSection;
