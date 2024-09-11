/** @jsxImportSource @emotion/react */
import { keyframes, css } from '@emotion/react';
import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Head from 'next/head';

// Define the keyframes for the flashing effect
const flashAnimation = keyframes`
  0% { background-color: #FFA500; }
  50% { background-color: transparent; }
  100% { background-color: #FFA500; }
`;

// Define the style using the animation and enforce desktop layout
const flashStyle = css`
  animation: ${flashAnimation} 30s infinite;

  /* Lock the layout to a minimum desktop width */
  @media screen and (max-width: 1024px) {
    html, body {
      width: 1024px;
      overflow-x: auto;
    }

    /* Ensure the container keeps desktop proportions */
    min-width: 1024px;
  }
`;

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID as string;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={CLIENT_ID}
      activeChain={{
        chainId: 199,
        rpc: ["https://199.rpc.thirdweb.com"],  // RPC URL for the chain
        nativeCurrency: {
          name: "BitTorrent",
          symbol: "BTT",  // Adjust the symbol to the chain's native token if needed
          decimals: 18,
        },
        name: "BitTorrent Chain",
        chain: "bttc",  // A common abbreviation for the chain
        shortName: "BTT",
        testnet: false,  // Adjust based on whether the chain is a testnet or mainnet
        slug: "bttc",  // A URL-friendly version of the chain name
      }}
    >
      <ChakraProvider>
        <Head>
          {/* Prevent mobile scaling */}
          <meta name="viewport" content="width=1024" />

          {/* Multiple favicon formats for better browser support */}
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </Head>
        <NavBar />
        <Box minH="100vh" p={4} css={flashStyle}>
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
