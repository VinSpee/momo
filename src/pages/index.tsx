import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Heading,
  Box,
  Center,
  HStack,
  Stack,
  Button
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import * as React from 'react';
import { useWeb3React } from '@web3-react/core';

const Index = () => {
  const web3React = useWeb3React();
  const handleConnect = () => {
    console.log(web3React);
  };
  return (
    <Container height="100vh">
      <DarkModeSwitch />
      <Stack spacing="12">
        <Stack spacing="6" p="4">
          <Heading as="h1" size="4xl">
            Ⓜ️😵Ⓜ️😮
          </Heading>
          <Heading as="h2" size="xl">
            Speak your mind, <Text color="green.400">in emoji</Text>
          </Heading>
        </Stack>
        <Center>
          <Button onClick={handleConnect} variant="solid" colorScheme="yellow">
            Connect your wallet
          </Button>
        </Center>
      </Stack>
    </Container>
  );
};

export default Index;
