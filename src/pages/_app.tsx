import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';
import { AppProps } from 'next/app';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
import * as React from 'react';

function getLibrary(provider, connector) {
  return new ethers.providers.JsonRpcProvider(provider); // this will vary according to whether you use e.g. ethers or web3.js
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
