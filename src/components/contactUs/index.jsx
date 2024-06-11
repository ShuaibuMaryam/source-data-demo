import React from "react";
import {
    Box,
    Image,
    Flex,
    Text,
    useMediaQuery,
} from "@chakra-ui/react";
import styled from "styled-components";
import {BsTelephone, BsPhoneVibrate, BsSend} from "react-icons/bs";
import {AiOutlineMail, AiOutlineInstagram} from "react-icons/ai";
import {CiFacebook,CiTwitter} from "react-icons/ci";
import {FaPinterestP} from "react-icons/fa";
import ContactUsForm from "./contactUsForm";
import ContactUsMobile from "./mobile";
const ContactUs = () => {
    const [isMobileDevice] = useMediaQuery("(max-width: 992px)");
    return(
        <Box m={{base:"0",lg:"4rem"}}>
            {isMobileDevice ? (<ContactUsMobile/>) :(
            <Flex justifyContent={"center"}>
                <Card>
                    <Box >
                        <Text fontSize={"xl"}>Get in touch!</Text>
                        <Box bg={"#DB0090"} height={"5px"}  w={"4rem"} borderRadius={"lg"}></Box>
                    </Box>
                    <Box className={"card_one"}>
                        <Text pt={"1rem"}>Shop 19, Skiddo Bustop, Addo RD
                            <span style={{display:"block"}}>Lagos State.</span>
                            </Text>
                        <Box py={"2rem"} lineHeight={"35px"}>
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
                            <Flex color={"#A7016E"} gap={"1.5rem"} fontSize={"20px"} pt={"10px"}>
                                <CiFacebook/>
                                <BsSend/>
                                <AiOutlineInstagram/>
                                <CiTwitter/>
                                <FaPinterestP/>
                            </Flex>
                        </Box>
                    </Box>
                </Card>
                    <Image src={"/assets/login-signup/map.png"} alt={"map"} maxWidth={"650px"}/>
            </Flex>
            )}
            <Flex justifyContent={"center"} >
                <ContactUsForm/>
            </Flex>

        </Box>
    )
};
export default ContactUs;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	padding: 3rem;
	background: #ffffff;
	border-radius: 21px;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	width: 33%;
	min-height: 300px;
	position: relative;
    border: 0.5px solid black;

	@media (max-width: 870px) {
		width: 70%;
	}

	@media (max-width: 600px) {
		width: 100%;
	}
  hr {
    margin-top: 0.6rem;
    background-color:#A7016E;
  }
	.card_one {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		padding-top: 0.5rem;
      
      
`;