import { MediaRenderer, Web3Button, useContract, useContractMetadata, useNFTs } from "@thirdweb-dev/react";
import { FARMER_ADDRESS } from "../const/addresses";
import { Box, Container, Flex, Heading, Text, Grid, useToast } from "@chakra-ui/react";
import { useState } from "react";

export function ClaimFarmer() {
    const { contract } = useContract(FARMER_ADDRESS);
    const { data: metadata } = useContractMetadata(contract);
    const { data: nfts } = useNFTs(contract);
    const toast = useToast();

    return (
        <Container maxW={"1200px"} py={12}>
            <Flex direction={"column"} alignItems={"center"} justifyContent={"center"}>
                <Heading mb={6} fontSize={"3xl"}>Start Earning</Heading>
                
                <Box borderRadius={"md"} overflow={"hidden"} mb={10} boxShadow={"lg"}>
                    <MediaRenderer
                        src={metadata?.image}
                        height="300px"
                        width="300px"
                        style={{ borderRadius: "8px", objectFit: "cover" }}
                    />
                </Box>

                <Text fontSize={"lg"} mb={4}>Available NFTs:</Text>
                
                <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={8} mb={8}>
                    {nfts && nfts.map((nft) => (
                        <Box
                        key={nft.metadata.id} // Ensure that you use nft.metadata.id or nft.id
                            borderWidth={"1px"}
                            borderRadius={"md"}
                            overflow={"hidden"}
                            boxShadow={"md"}
                            p={4}
                            textAlign={"center"}
                            bg={"white"}
                            _hover={{ bg: "gray.50", cursor: "pointer" }}
                        >
                            <MediaRenderer
                                src={nft.metadata?.image}
                                height="150px"
                                width="150px"
                                style={{ borderRadius: "8px", objectFit: "cover" }}
                            />
                            <Text mt={2} fontWeight={"bold"}>
                                {nft.metadata?.name || `NFT ${nft}`}
                            </Text>
                        </Box>
                    ))}
                </Grid>

                <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={128} mb={18}>
                    <Web3Button
                        contractAddress={FARMER_ADDRESS}
                        action={(contract) => contract.erc1155.claim(0, 1)}
                    >Claim BitTorrenter 
                    </Web3Button>

                    <Web3Button
                        contractAddress={FARMER_ADDRESS}
                        action={(contract) => contract.erc1155.claim(1, 1)}
                    >Claim BitTorrenter 
                    </Web3Button>

                    <Web3Button
                        contractAddress={FARMER_ADDRESS}
                        action={(contract) => contract.erc1155.claim(2, 1)}
                    >Claim BitTorrenter 
                    </Web3Button>

                    <Web3Button
                        contractAddress={FARMER_ADDRESS}
                        action={(contract) => contract.erc1155.claim(3, 1)}
                    >Claim BitTorrenter 
                    </Web3Button>
                </Grid>
            </Flex>
        </Container>
    );
}
