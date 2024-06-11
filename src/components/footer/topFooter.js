import {
	Box,
	Button,
	Flex,
	FormControl,
	Heading,
	Input,
	Text,
	useTheme,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { GridOne, Container } from "../../../styles/footer.style";
// import Newsletter from "../newsletter";
import { logoWhite, payment } from "../../../public/assets/footer";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const TopFooter = () => {
	const theme = useTheme();
	return (
		<>
			<Flex
				justifyContent={"center"}
				alignItem={"center"}
				zIndex={2}
				mb={"-4rem"}
			>
				{/* <Newsletter /> */}
			</Flex>
			<Container>
				<GridOne>
					<Flex flexDir="column">
						<Image src={logoWhite} alt={"logo"} />
						<Flex
							fontSize={"14px"}
							fontWeight={"400"}
							color={"#EEEDED"}
							direction={"column"}
							justifyContent={"center"}
						>
							<Text mb={"5px"}>
								Shop 5E Praise Plaza, Skiddo Bus Stop, Addo Road, Ajah.
							</Text>
							<Flex alignItems={"center"}>
								<HiOutlineMail fontSize={"1rem"} color="#fff" />
								<Text marginLeft={"5px"}>support@weatherfor2.com</Text>{" "}
							</Flex>
							<Flex alignItems={"center"}>
								<BsTelephone fontSize={"1rem"} color="#fff" />
								<Text marginLeft={"5px"}> 0809 999 7576</Text>
							</Flex>
							<Flex alignItems={"center"}>
								<FaWhatsapp fontSize={"1rem"} color="#fff" />
								<Text marginLeft={"5px"}> 0809 999 7576</Text>
							</Flex>
						</Flex>
					</Flex>
					<Flex gap={".3rem"}>
						<Flex
							fontSize={"14px"}
							fontWeight={"400"}
							color={"#EEEDED"}
							direction={"column"}
						>
							<Text mb={"5px"}>Connect</Text>
							<Box
								width={"30px"}
								h={"1.6px"}
								bg={"#EEEDED"}
								mt={".3rem"}
								mb={".8rem"}
							/>
							<Text>Twitter</Text>
							<Text>Facebook</Text>
							<Text>Instagram</Text>
							<Text>Pinterest</Text>
							<Text>Jobs</Text>
						</Flex>
					</Flex>
					<Flex gap={".3rem"}>
						<Flex
							fontSize={"14px"}
							fontWeight={"400"}
							color={"#EEEDED"}
							direction={"column"}
						>
							<Text mb={"5px"}>Quick Links</Text>
							<Box
								width={"30px"}
								h={"1.6px"}
								bg={"#EEEDED"}
								mt={".3rem"}
								mb={".8rem"}
							/>
							<Text>Shipping Policy</Text>
							<Text>Privacy Policy</Text>
							<Text>Terms & Conditions</Text>
							<Text>Store Locations</Text>
							<Text>Order and Returns</Text>
						</Flex>
					</Flex>
					<Flex gap={".3rem"}>
						<Flex
							fontSize={"14px"}
							fontWeight={"400"}
							color={"#fff"}
							direction={"column"}
						>
							<Text>Support</Text>
							<Box
								width={"30px"}
								h={"1.6px"}
								bg={"#EEEDED"}
								mt={".3rem"}
								mb={".8rem"}
							/>
							<Text>Contact Support</Text>
							<Text>Consultation</Text>
							<Text>Contact</Text>
						</Flex>
					</Flex>
					<Flex gap={".3rem"}>
						<Flex gap={".3rem"}>
							<Flex
								fontSize={"14px"}
								fontWeight={"400"}
								color={"#fff"}
								direction={"column"}
							>
								<Text>Promotions</Text>
								<Box
									width={"30px"}
									h={"1.6px"}
									bg={"#EEEDED"}
									mt={".3rem"}
									mb={".8rem"}
								/>
								<Text>Special Offers</Text>
								<Text>Clearance Sale</Text>
								<Text>Weatherfor2 Promo</Text>
								<Box bg={"#fff"} p={"5px 4px"} borderRadius={"2px"} my={"5px"}>
									<Image src={payment} alt={"payments"} />
								</Box>
							</Flex>
						</Flex>
					</Flex>
				</GridOne>
			</Container>
		</>
	);
};

export default TopFooter;
