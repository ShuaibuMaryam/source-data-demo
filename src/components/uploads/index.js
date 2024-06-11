import {
	Box,
	Button,
	Flex,
	Grid,
	Image,
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
	Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { recentUploads } from "./data";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import ChildDetails from "../childDetails";

function Uploads({ results }) {
	return (
		<>
			<Box
				fontFamily={"Work Sans"}
				p={{ base: "1rem", md: "2rem" }}
				position={"absolute"}
				// ml={"4rem"}
				right={"0"}
				left={{ base: "0", lg: "17%" }}
				overflow={"hidden"}
				// border={"1px solid"}
				// maxW={"80%"}
				// border={"1px solid red"}
			>
				<Grid
					templateColumns={{
						base: "100%",
						md: "repeat(2, 1fr)",
						lg: "repeat(4, 1fr)",
					}}
					gap={"1rem"}
				>
					{results.map((child) => {
						return (
							<Flex
								key={child.id}
								flexDir={"column"}
								border={"1px solid rgba(0, 0, 0, 0.12)"}
								p={"1rem"}
								borderRadius={"24px"}
								align={{ base: "center", md: "unset" }}
							>
								<Flex w={"100px"} h={"100px"}>
									<Image
										src={child?.image}
										alt="Missing child"
										borderRadius={"100px"}
										w={"100%"}
										h={"100%"}
									/>
								</Flex>

								<Text
									fontSize={"lg"}
									fontWeight={"600"}
									color={"#2D2D2D"}
									mt={".7rem"}
								>
									{child?.first_name} {child?.middle_name} {child?.surname}
								</Text>
								<Flex gap={".7rem"} mt={".4rem"}>
									<Flex
										flexDir={"column"}
										fontSize={"1rem"}
										color={"rgba(0, 0, 0, 0.40)"}
										fontWeight={"400"}
										fontFamily={"Work Sans"}
									>
										<Text>Missing since</Text>
										<Text>Age</Text>
										<Text>Gender</Text>
									</Flex>
									<Flex
										flexDir={"column"}
										fontSize={"1rem"}
										color={"#2D2D2D"}
										fontWeight={"400"}
									>
										<Text>{child?.missing_date}</Text>
										<Text>{child?.age} years</Text>
										<Text>{child?.gender}</Text>
									</Flex>
								</Flex>
								<Box mt={"auto"} w={"100%"}>
									<Link
										href={{
											pathname: "/child-details",
											query: { id: child.id },
										}}
									>
										<Button
											bg={"#7CCFED"}
											color={"#2D2D2D"}
											borderRadius={"40px"}
											w={"100%"}
											minH={"40px"}
											mt={"1.5rem"}
										>
											View
										</Button>
									</Link>
								</Box>
							</Flex>
						);
					})}
				</Grid>
				{/* MODAL */}
				{/* <Modal isOpen={modalOpen} onClose={toggleModal}>
					<ModalOverlay />
					<ModalContent
						maxWidth={"90%"}
						border="1px solid #000"
						className="box-shadow"
					>
						<ModalBody mt={1}>
							<Box>
								<ChildDetails
									toggleModal={toggleModal}
									childId={setSelectedChildId}
								/>
							</Box>
						</ModalBody>
					</ModalContent>
				</Modal> */}
			</Box>
		</>
	);
}

export default Uploads;
