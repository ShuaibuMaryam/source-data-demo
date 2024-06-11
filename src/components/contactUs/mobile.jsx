import React from "react";
import {
    Box,
    Image,
    Flex,
    Text,
} from "@chakra-ui/react";
import {BsTelephone, BsPhoneVibrate, BsSend} from "react-icons/bs";
import {AiOutlineMail, AiOutlineInstagram} from "react-icons/ai";
import {CiFacebook,CiTwitter} from "react-icons/ci";
import {FaPinterestP} from "react-icons/fa";


const ContactUsMobile = () => {
    return (
        <Box>
            <Flex my={"2rem"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
                <Text fontSize={"2xl"} fontWeight={"500"} >Get in touch!</Text>
                <Box bg={"#DB0090"} height={"5px"}  w={"4rem"} borderRadius={"lg"} ml={"-4rem"}></Box>
            </Flex>
        <Box bg={"#D9D9D9"} borderRadius={"lg"} >
            <Box p={"1rem"}>
                <Text pt={"1rem"}>Shop 19, Skiddo Bustop, Addo RD Lagos State.
                </Text>
                <Box py={"2rem"} lineHeight={"35px"} ml={"2rem"}>
                    <Flex alignItems={"center"} gap={"3"}>
                        <BsTelephone color={"#A7016E"}/>
                        <a href="tel:+234 809 999 7576" itemProp="telephone">
                            <p>+234 809 999 7576</p>
                        </a>
                    </Flex>
                    <Flex alignItems={"center"} gap={"3"}>
                        <BsPhoneVibrate color={"#A7016E"}/>
                        <a href="tel:+234 809 999 7576" itemProp="telephone">
                            <p>+234 809 999 7576</p>
                        </a>
                    </Flex>
                    <Flex alignItems={"center"} gap={"3"}>
                        <AiOutlineMail color={"#A7016E"}/>
                        <a href="mailto: support@weatherfor2.com" itemProp="telephone">
                            <p>support@weatherfor2.com </p>
                        </a>
                    </Flex>
                </Box>
                <Box>
                    <Text fontSize={"sm"} >FOLLOW US</Text>
                    <hr />
                    <Flex color={"#A7016E"} justifyContent={"space-around"} fontSize={"20px"} pt={"10px"} px={"2rem"}>
                        <CiFacebook/>
                        <BsSend/>
                        <AiOutlineInstagram/>
                        <CiTwitter/>
                        <FaPinterestP/>
                    </Flex>
                </Box>
            </Box>
            <Image src={"/assets/login-signup/map.png"} alt={"map"} />
        </Box>
        </Box>
    )
}
export default ContactUsMobile;