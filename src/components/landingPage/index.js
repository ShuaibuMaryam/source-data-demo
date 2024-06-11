import { Box, Flex, Image, useTheme } from "@chakra-ui/react";
import MainHeading from "./heading";
import Hero from "./Hero";
import Uploads from "../uploads";
import MobileNav from "../navbar/MobileNav";
import SideNav from "../sideNav";
import Navbar from "../navbar";
import { useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

const LandingPage = () => {
	const [cases, setCases] = useState([]);
	const casesCollectionRef = collection(db, "children");

	// const [filteredData, setFilteredData] = useState([cases]);

	useEffect(() => {
		const getCases = async () => {
			const data = await getDocs(casesCollectionRef);
			// console.log(data);
			setCases(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getCases();
	}, []);

	//---------- Search----------

	const [query, setQuery] = useState("");
	const [results, setResults] = useState(cases);

	// Function to handle input change and update the query state
	const handleInputChange = (e) => {
		const inputValue = e.target.value;
		setQuery(inputValue);

		// Call the search function when the input changes
		search(inputValue);
	};

	// Function to perform the search
	const search = (query) => {
		// Filter the data based on the query and update the results state
		const filteredData = cases.filter((item) =>
			item.first_name.toLowerCase().includes(query.toLowerCase())
		);
		setResults(filteredData);

		// if (query) {
		// 	const filteredData = cases.filter((item) =>
		// 		item.first_name.toLowerCase().includes(query.toLowerCase())
		// 	);
		// 	setResults(filteredData);
		// } else {
		// 	// If the search query is empty, display the full data
		// 	setResults(cases);
		// }
	};

	return (
		<Box maxW={"100%"} overflow={"hidden"}>
			<Navbar />

			<Hero query={query} handleInputChange={handleInputChange} />

			<Flex maxW={"100%"} overflowX={"hidden"}>
				<SideNav />
				<Uploads results={results} />
			</Flex>
		</Box>
	);
};

export default LandingPage;
