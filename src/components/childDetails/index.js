import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { React, useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/router";
import Navbar from "../navbar";

function ChildDetails({ toggleModal, childId }) {
	const router = useRouter();
	const { id } = router.query;
	console.log(id);

	const [singleCase, setSingleCase] = useState("");
	const casesCollectionRef = collection(db, "children");

	const documentRef = doc(db, "children", id);
	useEffect(() => {
		const getSingleCase = async () => {
			try {
				const documentSnapshot = await getDoc(documentRef);
				if (documentSnapshot.exists()) {
					// Document exists
					console.log("Document data:", documentSnapshot.data());
					setSingleCase(documentSnapshot.data());
				} else {
					// Document doesn't exist
					console.log("Document does not exist.");
				}
			} catch (error) {
				console.error("Error getting document:", error);
			}
		};

		getSingleCase();
	}, []);
	return (
		<Box>
			<Navbar />
			<Flex
				direction={"column"}
				p={{ base: "1rem", lg: "1.5rem" }}
				gap={"1rem"}
				m={"0 auto"}
				w={{ base: "100%", lg: "70%" }}
				mt={{ base: "2rem", md: "6rem" }}
			>
				<Heading size={{ base: "sm", md: "md", lg: "lg" }}>
					{singleCase?.first_name} {singleCase?.middle_name}{" "}
					{singleCase?.surname}
				</Heading>
				<Flex direction={{ base: "column", lg: "row" }} gap={".6rem"}>
					<Box maxW={{ base: "100%", md: "450px" }} maxH={"360px"}>
						<Image
							src={singleCase?.image}
							alt="Child in green clothes"
							borderRadius={"24px"}
						/>
					</Box>
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
							{/* <Text>Location</Text> */}
							{/* <Text>Height</Text> */}
							<Text>Eye colour</Text>
							<Text>Hair colour</Text>
						</Flex>
						<Flex
							flexDir={"column"}
							fontSize={"1rem"}
							color={"#2D2D2D"}
							fontWeight={"400"}
						>
							<Text>{singleCase?.missing_date}</Text>
							<Text>{singleCase?.age}</Text>
							<Text>{singleCase?.gender}</Text>
							{/* <Text>Rayfield, Jos Nigeria</Text> */}
							{/* <Text>3’3 ft</Text> */}
							<Text>{singleCase?.eye_color}</Text>
							<Text>{singleCase?.hair_color}</Text>
						</Flex>
					</Flex>
				</Flex>
				<Flex w={{ base: "100%", lg: "80%" }} direction={"column"} gap={"1rem"}>
					<Flex direction={"column"}>
						<Text
							flexDir={"column"}
							fontSize={"1rem"}
							color={"rgba(0, 0, 0, 0.40)"}
							fontWeight={"400"}
							fontFamily={"Work Sans"}
						>
							Last Seen Circumstance
						</Text>
						<Text
							flexDir={"column"}
							fontSize={"1rem"}
							color={"#2D2D2D"}
							fontWeight={"400"}
						>
							{singleCase?.description}
						</Text>
					</Flex>
					<Flex direction={"column"}>
						<Text
							flexDir={"column"}
							fontSize={"1rem"}
							color={"rgba(0, 0, 0, 0.40)"}
							fontWeight={"400"}
							fontFamily={"Work Sans"}
						>
							Reported by
						</Text>
						<Text
							flexDir={"column"}
							fontSize={"1rem"}
							color={"#2D2D2D"}
							fontWeight={"400"}
						>
							Ambrose Leonard
						</Text>
						<Text>Father</Text>
					</Flex>
					<Flex direction={"column"}>
						<Text
							flexDir={"column"}
							fontSize={"1rem"}
							color={"rgba(0, 0, 0, 0.40)"}
							fontWeight={"400"}
							fontFamily={"Work Sans"}
						>
							Contact
						</Text>
						<Text
							flexDir={"column"}
							fontSize={"1rem"}
							color={"#2D2D2D"}
							fontWeight={"400"}
						>
							{singleCase?.first_contact}
						</Text>
						<Text>{singleCase?.second_contact}</Text>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
}

export default ChildDetails;
