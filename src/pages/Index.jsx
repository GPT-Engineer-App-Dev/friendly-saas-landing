import { Container, Box, Heading, Text, VStack, HStack, Button, IconButton, Image } from "@chakra-ui/react";
import { FaRocket, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center" py={10} bg="gray.100" borderRadius="md">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to SaaSify
          </Heading>
          <Text fontSize="xl" mb={6}>
            The ultimate solution for managing your business efficiently.
          </Text>
          <HStack spacing={4} justify="center">
            <Button colorScheme="teal" size="lg">
              Get Started
            </Button>
            <Button variant="outline" colorScheme="teal" size="lg">
              Learn More
            </Button>
          </HStack>
        </Box>

        {/* Features Section */}
        <Box py={10}>
          <Heading as="h2" size="xl" textAlign="center" mb={8}>
            Features
          </Heading>
          <HStack spacing={8} justify="center">
            <VStack spacing={4} align="center">
              <IconButton aria-label="Feature 1" icon={<FaCheckCircle />} size="lg" colorScheme="teal" />
              <Text fontSize="lg" fontWeight="bold">
                Feature 1
              </Text>
              <Text textAlign="center">Description of feature 1 that highlights its benefits and usage.</Text>
            </VStack>
            <VStack spacing={4} align="center">
              <IconButton aria-label="Feature 2" icon={<FaCheckCircle />} size="lg" colorScheme="teal" />
              <Text fontSize="lg" fontWeight="bold">
                Feature 2
              </Text>
              <Text textAlign="center">Description of feature 2 that highlights its benefits and usage.</Text>
            </VStack>
            <VStack spacing={4} align="center">
              <IconButton aria-label="Feature 3" icon={<FaCheckCircle />} size="lg" colorScheme="teal" />
              <Text fontSize="lg" fontWeight="bold">
                Feature 3
              </Text>
              <Text textAlign="center">Description of feature 3 that highlights its benefits and usage.</Text>
            </VStack>
          </HStack>
        </Box>

        {/* About Section */}
        <Box py={10} bg="gray.100" borderRadius="md">
          <HStack spacing={8} align="center">
            <Box flex="1">
              <Heading as="h2" size="xl" mb={4}>
                About Us
              </Heading>
              <Text fontSize="lg">SaaSify is dedicated to providing top-notch solutions for businesses of all sizes. Our platform is designed to streamline your operations and boost productivity.</Text>
            </Box>
            <Box flex="1">
              <VStack spacing={4}>
                <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3MTYyODY4MDZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Team Collaboration" borderRadius="md" />
                <Image src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW19ZW58MHx8fHwxNzE2Mjg2ODA2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Business Meeting" borderRadius="md" />
                <Image src="https://images.unsplash.com/photo-1531497865146-5a4c8a4a3a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbGxhYm9yYXRpb258ZW58MHx8fHwxNzE2Mjg2ODA2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Team Discussion" borderRadius="md" />
              </VStack>
            </Box>
          </HStack>
        </Box>

        {/* Call to Action Section */}
        <Box textAlign="center" py={10}>
          <Heading as="h2" size="xl" mb={4}>
            Ready to Transform Your Business?
          </Heading>
          <Text fontSize="lg" mb={6}>
            Join thousands of satisfied customers who are already using SaaSify to enhance their business operations.
          </Text>
          <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
            Get Started Now
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
