import { Container, Flex, Heading, Link, IconButton } from "@chakra-ui/react";
import { ThirdwebProvider, ConnectWallet } from "@thirdweb-dev/react";
import { FaFacebook, FaTwitter,  FaTiktok, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import Image from 'next/image'; // Import Image from next/image

export default function NavBar() {
    return (
        <ThirdwebProvider>

        <Container maxW={"1200px"} py={4}>
            <Flex direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                  
            <Image 
                        src="/sats.png" // Correct path for the public directory
                        alt=""
                        width={30} // Set the width of your logo
                        height={30} // Set the height of your logo
                    />
                  
                  <Heading>SATs (BitTorrent)</Heading>
                
                <Flex alignItems={"center"}>
                    <Link href={"https://sats.capetown"} mx={2}>Home</Link>
                    <Link href={"/"} mx={2}>Mine</Link>
                    <Link href={"/shop"} mx={2}>Store</Link>
                    <Link href={"https://sats-bittorrent.vercel.app/"} mx={2}>Staking Dapp</Link>
                </Flex>

                <Flex alignItems={"center"}>
                    <Link href="https://www.facebook.com/groups/1712714515929878" isExternal>
                        <IconButton 
                            aria-label="Facebook" 
                            icon={<FaFacebook />} 
                            variant="ghost" 
                            mx={1}
                        />
                    </Link>
                    <Link href="https://x.com/Sats_BitTorrent" isExternal>
                        <IconButton 
                            aria-label="Twitter" 
                            icon={<FaTwitter />} 
                            variant="ghost" 
                            mx={1}
                        />
                    </Link>
                    <Link href="https://instagram.com" isExternal>
                        <IconButton 
                            aria-label="Youtube" 
                            icon={<FaYoutube />} 
                            variant="ghost" 
                            mx={1}
                        />
                    </Link>
                    <Link href="https://www.tiktok.com/@sats.bittorrent" isExternal>
                        <IconButton 
                            aria-label="TikTok" 
                            icon={<FaTiktok />} 
                            variant="ghost" 
                            mx={1}
                        />
                    </Link>
                    <Link href="https://t.me/SATsBitTorrent" isExternal>
                        <IconButton 
                            aria-label="Telegram" 
                            icon={<FaTelegramPlane />} 
                            variant="ghost" 
                            mx={1}
                        />
                    </Link>
                </Flex>

                <ConnectWallet/>
            </Flex>
        </Container>
        </ThirdwebProvider>
    )
};
