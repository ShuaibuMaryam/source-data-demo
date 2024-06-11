import React from "react";
import Image from "next/image";
import {
	bedIcon,
	chairIcon,
	curtainIcon,
	homeIcon,
	matIcon,
	matressIcon,
	towelIcon,
} from "../../../public/assets/landingPage";
import styled from "styled-components";
import { Flex, Text } from "@chakra-ui/react";

const MainHeading = () => {
	return (
		<>
			{/* <Wrapper>
				<Flex padding={"0 1.2rem"} alignItem={"center"}>
					<Image src={homeIcon} alt={"icon"} />
					<Text fontSize={"0.98275rem"} fontWeight={"400"} ml={".3rem"}>
						Home
					</Text>
				</Flex>
				<div style={{ background: "#ccc", width: "2px", height: "20px" }} />
				<Flex padding={"0 1.2rem"} alignItem={"center"}>
					<Image src={bedIcon} alt={"icon"} />
					<Text fontSize={"0.98275rem"} fontWeight={"400"} ml={".3rem"}>
						Beddings
					</Text>
				</Flex>
				<div style={{ background: "#ccc", width: "2px", height: "20px" }} />
				<Flex padding={"0 1.2rem"} alignItem={"center"}>
					<Image src={chairIcon} alt={"icon"} />
					<Text fontSize={"0.98275rem"} fontWeight={"400"} ml={".3rem"}>
						Furniture
					</Text>
				</Flex>
				<div style={{ background: "#ccc", width: "2px", height: "20px" }} />
				<Flex padding={"0 1.2rem"} alignItem={"center"}>
					<Image src={matressIcon} alt={"icon"} />
					<Text fontSize={"0.98275rem"} fontWeight={"400"} ml={".3rem"}>
						Mattresses
					</Text>
				</Flex>

				<div style={{ background: "#ccc", width: "2px", height: "20px" }} />
				<Flex padding={"0 1.2rem"} alignItem={"center"}>
					<Image src={curtainIcon} alt={"icon"} />
					<Text fontSize={"0.98275rem"} fontWeight={"400"} ml={".3rem"}>
						Curtain & Binds
					</Text>
				</Flex>

				<div style={{ background: "#ccc", width: "2px", height: "20px" }} />
				<Flex padding={"0 1.2rem"} alignItem={"center"}>
					<Image src={towelIcon} alt={"icon"} />
					<Text fontSize={"0.98275rem"} fontWeight={"400"} ml={".3rem"}>
						Towel
					</Text>
				</Flex>

				<div style={{ background: "#ccc", width: "2px", height: "20px" }} />
				<Flex padding={"0 1.2rem"} alignItem={"center"}>
					<Image src={matIcon} alt={"icon"} />
					<Text fontSize={"0.98275rem"} fontWeight={"400"} ml={".3rem"}>
						Branding
					</Text>
				</Flex>
			</Wrapper> */}
		</>
	);
};

export default MainHeading;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;

	background: #fff;
	width: 100%;
	height: 7vh;

	svg {
		padding: 0 1.5rem;
		font-size: 1.25rem;
	}
`;
