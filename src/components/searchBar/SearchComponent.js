import React, { useState } from "react";
import ReactDOM from "react-dom";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, connectSearchBox, Hits } from "react-instantsearch-dom";
import { FaSearch, FaHome } from "react-icons/fa";
import Link from "next/link";
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	useDisclosure,
	Input,
	Flex,
	Box,
	Text,
} from "@chakra-ui/react";
import SearchModalComponent from "./searchModal";
import styled from "styled-components";
const SearchBox = connectSearchBox(({ currentRefinement, refine }) => (
	<input
		type="text"
		value={currentRefinement}
		onChange={(event) => refine(event.currentTarget.value)}
		placeholder="Search..."
	/>
));

export function SearchModal() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [query, setQuery] = useState("");

	const handleQueryChange = (event) => {
		event.preventDefault();
		setQuery(event.currentTarget.value);
		onOpen();
	};

	const handleClose = () => {
		setQuery("");
		onClose();
	};

	return (
		<Wrapper>
			<SearchBox currentRefinement={query} refine={setQuery} />
			<button onClick={handleQueryChange} type="submit">
				{/* <FaSearch /> */}
			</button>
			<SearchModalComponent isOpen={isOpen} handleClose={handleClose} />
			{/* <Modal
				isOpen={isOpen}
				onClose={handleClose}
				size={{ lg: "3xl", "2xl": "5xl" }}
			>
				<ModalOverlay />
				<ModalContent className="modal">
					<ModalHeader>Search Results</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Hits
							hitComponent={(hit) => (
								<Result {...hit} handleClose={handleClose} />
							)}
							handleClose={onClose}
						/>
					</ModalBody>
				</ModalContent>
			</Modal> */}
		</Wrapper>
	);
}

export function Result({ hit, handleClose }) {
	console.log(hit);
	switch (hit.type) {
		case "products":
			return (
				<Box onClick={handleClose}>
					<Text
						rounded={"md"}
						px={"1"}
						py={"1"}
						mb={"2"}
						width={"fit-content"}
						textTransform={"capitalize"}
						shadow={"md"}
						bg={"#C6002D"}
						color={"white"}
					>
						{hit.type}
					</Text>
					<Link my={".3rem"} href={`/product-details/${hit.id}`}>
						<Text color="#C6002D" textDecoration={"underline"}>
							{hit.name}
						</Text>
					</Link>
					<Text my={".4rem"}>{`${hit.description}...`}</Text>
				</Box>
			);
			break;
		case "workshops":
			return (
				<Box onClick={handleClose}>
					<Text
						rounded={"md"}
						px={"1"}
						py={"1"}
						mb={"2"}
						width={"fit-content"}
						textTransform={"capitalize"}
						shadow={"md"}
						bg={"#C6002D"}
						color={"white"}
					>
						{hit.type}
					</Text>
					<Link my={".3rem"} href={`/workshop-details/${hit.id}`}>
						<Text color="#C6002D" textDecoration={"underline"}>
							{hit.name}
						</Text>
					</Link>
					<Text my={".4rem"}>{`${hit.description.slice(0, 150)}...`}</Text>
				</Box>
			);
			break;
		case "subcategories":
			return (
				<Box onClick={handleClose}>
					<Text
						rounded={"md"}
						px={"1"}
						py={"1"}
						mb={"2"}
						width={"fit-content"}
						textTransform={"capitalize"}
						shadow={"md"}
						bg={"#C6002D"}
						color={"white"}
					>
						{hit.type}
					</Text>
					<Link my={".3rem"} href={`/sub-categories/${hit.id}`}>
						<Text color="#C6002D" textDecoration={"underline"}>
							{hit.name}
						</Text>
					</Link>
					<Text my={".4rem"}>{`${hit.description.slice(0, 150)}...`}</Text>
				</Box>
			);
			break;
		case "blogs":
			return (
				<Box onClick={handleClose}>
					<Text
						rounded={"md"}
						px={"1"}
						py={"1"}
						mb={"2"}
						width={"fit-content"}
						textTransform={"capitalize"}
						shadow={"md"}
						bg={"#C6002D"}
						color={"white"}
					>
						{hit.type}
					</Text>
					<Link my={".3rem"} href={`/singleBlog/${hit.id}`}>
						<Text color="#C6002D" textDecoration={"underline"}>
							{hit.name}
						</Text>
					</Link>
					<Text my={".4rem"}>{`${hit.description.slice(0, 150)}...`}</Text>
				</Box>
			);
			break;
		default:
			return <Box display={"none"}></Box>;
			break;
	}
}

const Wrapper = styled.div`
	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #fff;
		padding: 20px;
		z-index: 200000; /* Higher z-index than the navbar */
	}
	ul {
		list-style: none;
	}
`;
