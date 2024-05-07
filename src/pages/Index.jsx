import { Container, Text, VStack, Heading, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Index = () => {
  const [daysSinceStart, setDaysSinceStart] = useState(0);

  useEffect(() => {
    const startDate = new Date("February 1, 2024");
    const now = new Date();
    const difference = now - startDate;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    setDaysSinceStart(days);
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Startup Launch Countdown</Heading>
        <Box p={8} bg="gray.100" borderRadius="lg">
          <Text fontSize="6xl" fontWeight="bold">{daysSinceStart}</Text>
          <Text fontSize="2xl">days since February 1, 2024</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;